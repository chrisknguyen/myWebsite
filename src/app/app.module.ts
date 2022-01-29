import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavModule } from './shared/components/top-nav/top-nav.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { BinarySearchModule } from './algorithms/binary-search/binary-search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopNavModule,
    FooterModule,
    HomeModule,
    ContactModule,
    BinarySearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
