import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SliderComponent } from './components/slider/slider.component';
import { CardsComponent } from './components/cards/cards.component';
import { BannersComponent } from './components/banners/banners.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SliderComponent,
    CardsComponent,
    BannersComponent,
    TabsComponent,
    ContactFormComponent,
    FooterComponent,
    CookiesPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
