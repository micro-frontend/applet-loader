import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppletLoaderModule } from '../../../applet-loader/src/lib/applet-loader.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppletLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
