import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavModule } from "./shared/components/top-nav/top-nav.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopNavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
