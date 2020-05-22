import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dynamicContent: SafeHtml;

  constructor(sanitizer: DomSanitizer) {
    this.dynamicContent = sanitizer.bypassSecurityTrustHtml('<mf-abc></mf-abc>');
  }
}
