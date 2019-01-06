import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightingDirective } from './highlighting.directive';
import { UserInfoComponent } from './user-info/user-info.component';
import { JokesComponent } from './jokes/jokes.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightComponent,
    HighlightingDirective,
    UserInfoComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
