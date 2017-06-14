import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubComponent } from './components/github.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, GithubComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
