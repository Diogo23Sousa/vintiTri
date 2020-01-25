import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/services/shopping.service';
import { EmailService } from 'src/app/services/email.service';
import { MyOrderDetails } from 'src/app/models/my-order-details';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
// NG MODELS
firstAndLastName = '';
email = '';
phoneNumber = '';
adressLine = '';
zipCode = '';
city = '';
country = '';
cardNumber = '';
expirationDate = '';
cvc = '';

// NG MODELS VALIDATORS
isBasketEmpty;
isEmailValid;
isPhoneNumberValid;
isAdressLineValid;
isZipCodeValid;
isCityValid;
isCountryValid;
isCardNumberValid;
isExpirationDateValid;
isCvcValid;
isInformationCorrectValid;

// NG STYLES
orderSuccess = 'none';
orderFail = 'none';
purchaseIsComplete = false;

  constructor(private shoppingService: ShoppingService, private emailService: EmailService) {
  }

  ngOnInit() {
    if (this.shoppingService.totalOrders.length > 0) {
      this.isBasketEmpty = false;
    } else {
      this.isBasketEmpty = true;
    }
  }

  paymentConfirmation() {
    // tslint:disable-next-line: max-line-length
    this.generalValidator(this.email, this.phoneNumber, this.adressLine, this.zipCode, this.city, this.country, this.cardNumber, this.expirationDate, this.cvc);
    // tslint:disable-next-line: max-line-length
    if (this.isEmailValid === this.isPhoneNumberValid === this.isAdressLineValid === this.isZipCodeValid === this.isCityValid === this.isCountryValid === this.isExpirationDateValid === this.isCvcValid === this.isInformationCorrectValid === true) {
      this.orderFail = 'none';
      this.orderSuccess = '';
      // tslint:disable-next-line: max-line-length
      const myOrderDetails = new MyOrderDetails(this.firstAndLastName, this.email, this.phoneNumber, this.adressLine, this.zipCode, this.city, this.country, this.cardNumber, this.expirationDate, this.cvc, this.shoppingService.getMyOrders());
      // tslint:disable-next-line: max-line-length
      this.emailService.sendThisOrder(myOrderDetails).subscribe(order => console.log(order));
      this.purchaseIsComplete = true;
      window.scrollTo(0, 0);
    } else {
      this.orderSuccess = 'none';
      this.orderFail = '';
      window.scrollTo(0, 0);
    }
  }

generalValidator(email, phoneNumber, adressLine, zipCode, city, country, cardNumber, expirationDate, cvc) {
  // EMAIL
  if (email.length > 3 && email.includes('@') && email.includes('.')) {
    this.isEmailValid = true;
  } else {
    this.isEmailValid = false;
    this.email = '';
  }
  // PHONE NUMBER
  if (phoneNumber.length > 0 && phoneNumber.length < 15) {
    this.isPhoneNumberValid = true;
  } else {
    this.isPhoneNumberValid = false;
    this.phoneNumber = '';
  }
  // ADRESS LINE
  if (adressLine.length > 3) {
    this.isAdressLineValid = true;
  }  else {
    this.isAdressLineValid = false;
    this.adressLine = '';}
  // ZIP CODE
  if (zipCode.length > 0) {
    this.isZipCodeValid = true;
  }  else {
    this.isZipCodeValid = false;
    this.zipCode = '';
  }
  // CITY
  if (city.length > 0) {
    this.isCityValid = true;
  }  else {
    this.isCityValid = false;
    this.city = '';
  }
  // COUNTRY
  if (country.length > 3) {
    this.isCountryValid = true;
  }  else {
    this.isCountryValid = false;
    this.country = '';
  }
  // CARDNUMBER
  if (cardNumber.length === 15 || cardNumber.length === 16) {
    this.isCardNumberValid = true;
  }  else {
    this.isCardNumberValid = false;
    this.cardNumber = '';
  }
  // EXPIRATION DATE
  if (expirationDate.length > 4 && expirationDate.substring(2, 3).includes('/')) {
    this.isExpirationDateValid = true;
  }  else {
    this.isExpirationDateValid = false;
    this.expirationDate = '';
  }
  // CVC
  if (cvc.length === 3 && !isNaN(cvc)) {
    this.isCvcValid = true;
  }  else {
    this.isCvcValid = false;
    this.cvc = '';
  }
}

informationIsCorrect() {
    this.isInformationCorrectValid = !this.isInformationCorrectValid;
}
}
