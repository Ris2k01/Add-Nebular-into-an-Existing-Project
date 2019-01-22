import { Component } from '@angular/core';
import { NgModule} from '@angular/core';


@NgModule({
  imports: [],
})


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <nb-layout>
  <nb-layout-header fixed>Company Name</nb-layout-header>

  <nb-sidebar>Sidebar Content</nb-sidebar>

  <nb-layout-column>Page Content</nb-layout-column>
  </nb-layout>
`
})
export class AppComponent {
  title = 'templatingtestv4';
}
