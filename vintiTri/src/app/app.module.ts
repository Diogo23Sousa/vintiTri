import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { FooterComponent } from './features/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TShirtsComponent } from './pages/t-shirts/t-shirts.component';
import { PolosComponent } from './pages/polos/polos.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { SizeCalculatorComponent } from './pages/size-calculator/size-calculator.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingService } from './services/shopping.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TShirtsComponent,
    PolosComponent,
    AboutUsComponent,
    ContactUsComponent,
    ShoppingCartComponent,
    FaqComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    SizeCalculatorComponent,
    CheckoutComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
