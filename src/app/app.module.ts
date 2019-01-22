import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';

import { NbThemeModule } from '@nebular/theme';

import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // this will enable the default theme, you can change this by passing `{ name: 'cosmic' }` to enable the dark theme
    NbThemeModule.forRoot({name: 'default'}),
    RouterModule.forRoot([]), // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule,
  ],
  providers: [NbSidebarService], // providers: [NbSidebarService], // we need this service for the sidebar
  bootstrap: [AppComponent]
})
export class AppModule { }

