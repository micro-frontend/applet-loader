import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerElement} from '../../../applet-loader/src/lib/utils/register-element';
import {AbcComponent} from './abc/abc.component';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    registerElement(injector, 'mf-abc', AbcComponent);
  }
}
