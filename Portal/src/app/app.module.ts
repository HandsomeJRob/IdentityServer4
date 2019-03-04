import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PortalNavComponent } from './portal-nav/portal-nav.component';
import { PortalBannerComponent } from './portal-banner/portal-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalNavComponent,
    PortalBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
