import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppletLoaderComponent } from './applet-loader/applet-loader.component';

export * from './applet-loader/applet-loader.component';
export * from './utils/register-element';

@NgModule({
  declarations: [AppletLoaderComponent],
  imports: [HttpClientModule],
  exports: [AppletLoaderComponent],
})
export class AppletLoaderModule {
}
