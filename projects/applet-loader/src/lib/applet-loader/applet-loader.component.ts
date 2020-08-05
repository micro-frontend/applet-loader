import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';
import { fromEvent, merge, Observable, of, zip } from 'rxjs';
import { finalize, map, switchMap, tap } from 'rxjs/operators';
import { parse } from '../utils/html-parser';
import { nextId } from '../utils/next-id';
import { sha1 } from '../utils/sha1';

export const NAME_OF_APPLET_ID = '__MF_APPLET_ID__';

@Component({
  selector: 'mf-applet-loader',
  templateUrl: './applet-loader.component.html',
  styleUrls: ['./applet-loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppletLoaderComponent implements OnInit {
  constructor(private http: HttpClient, private elementRef: ElementRef<Element>, private zone: NgZone) {
  }

  id = nextId();

  @Input()
  url: string;

  private get element(): Element {
    return this.elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.http
      .get(this.url, { responseType: 'text', params: { t: new Date().getTime().toFixed(0) } })
      .pipe(
        map((html) => parse(html)),
        tap(() => this.element.innerHTML = this.expandMacro(`<app-root-${NAME_OF_APPLET_ID}></app-root-${NAME_OF_APPLET_ID}>`)),
        switchMap((doc) => this.load(doc, this.url)),
        map((scripts) => this.expandMacro(scripts)),
        switchMap((scripts) => this.zone.runOutsideAngular(() => runScript(scripts))),
      ).subscribe();
  }

  private expandMacro(text: string): string {
    return text
      .replace(new RegExp(NAME_OF_APPLET_ID, 'g'), `_${sha1(this.url)}_${this.id}`)
      .replace(/webpackJsonp/g, `webpackJsonp_${sha1(this.url)}_${this.id}`);
  }

  private load(doc: Document, baseUri: string): Observable<string> {
    doc
      .querySelectorAll<HTMLLinkElement>('link[rel=stylesheet]')
      .forEach((link) => link.setAttribute('href', join(baseUri, link.getAttribute('href'))));
    const styles = doc.querySelectorAll('style,link[rel=stylesheet]');
    styles.forEach((element) => this.element.appendChild(element));
    const scriptElements = Array.from(doc.querySelectorAll('script'));
    const tasks = scriptElements.map((script) => {
      const src = script.getAttribute('src');
      if (src) {
        return this.http.get(join(baseUri, src), { responseType: 'text' });
      } else {
        return of(script.textContent);
      }
    });
    return zip(...tasks).pipe(map((scripts) => scripts.join('\n')));
  }
}

function join(...paths: string[]): string {
  return paths.join('/').replace(/\/{2,}/g, '/');
}

function runScript(content: string): Observable<Event> {
  const scriptElement = document.createElement('script');
  const url = URL.createObjectURL(new Blob([content], { type: 'application/javascript' }));
  scriptElement.src = url;
  document.head.appendChild(scriptElement);
  return merge(fromEvent(scriptElement, 'load'), fromEvent(scriptElement, 'error')).pipe(
    finalize(() => URL.revokeObjectURL(url)),
  );
}
