import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FaqComponent } from './pages/faq/faq.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { PolosComponent } from './pages/polos/polos.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { SizeCalculatorComponent } from './pages/size-calculator/size-calculator.component';
import { TShirtsComponent } from './pages/t-shirts/t-shirts.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', component: HomeComponent },
  { path: 'polos', component: PolosComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'size-calculator', component: SizeCalculatorComponent },
  { path: 't-shirts', component: TShirtsComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }