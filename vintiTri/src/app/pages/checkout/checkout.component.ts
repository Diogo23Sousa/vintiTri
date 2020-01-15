import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//   function paymentConfirmation () {
//     emailConfirmation();
//     phoneNumberConfirmation();
//     adressLineConfirmation();
//     zipCodeConfirmation();
//     cityConfirmation();
//     countryConfirmation();
//     cardNumberConfirmation();
//     expirationDateConfirmation();
//     cvcConfirmation();
//     informationIsCorrect();
// }

// function emailConfirmation () {
//     checkoutEmail = $("#checkoutEmail").get(0).value;
//     if (!checkoutEmail.includes("@" && ".")) {
//         console.log ("The email is not correct!")
//     }
//     else {
//         console.log("The email is ok!");
//     }
// }

// function phoneNumberConfirmation () {
//     phoneNumber = $("#checkoutPhoneNumber").get(0).value;
//     if (phoneNumber == "") {
//         console.log("is it Not a Number?", isNaN(phoneNumber));
//         console.log("The Phone Number is Not Valid")
//     }
//     else {
//         console.log("The Phone Number is ok!")
//     }
// }

// function adressLineConfirmation () {
//     adressLine = $("#adressLine").get(0).value;
//     if (adressLine == "" || adressLine.size < 5) {
//         console.log("The Adress Line is Not Valid")
//     }
//     else {
//         console.log("The Adress Line is ok!")
//     }
// }

// function zipCodeConfirmation () {
//     zipCode = $("#zipCode").get(0).value;
//     if (zipCode == "") {
//         console.log("The zipCode is Not Valid")
//     }
//     else {
//         console.log("The zipCode is ok!")
//     }
// }

// function cityConfirmation () {
//     city = $("#city").get(0).value;
//     if (city == "") {
//         console.log("The city is Not Valid")
//     }
//     else {
//         console.log("The city is ok!")
//     }
// }

// function countryConfirmation () {
//     country = $("#country").get(0).value;
//     if (country == "") {
//         console.log("The country is Not Valid")
//     }
//     else {
//         console.log("The country is ok!")
//     }
// }

// function cardNumberConfirmation () {
//     cardNumber = $("#cardNumber").get(0).value;
//     if (cardNumber == "") {
//         console.log("The cardNumber is Not Valid")
//     }
//     else {
//         console.log("The cardNumber is ok!")
//     }
// }

// function expirationDateConfirmation () {
//     expirationDate = $("#expirationDate").get(0).value;
//     if (expirationDate == "") {
//         console.log("The expirationDate is Not Valid")
//     }
//     else {
//         console.log("The expirationDate is ok!")
//     }
// }

// function cvcConfirmation () {
//     cvc = $("#cvc").get(0).value;
//     if (cvc == "") {
//         console.log("The cvc is Not Valid")
//     }
//     else {
//         console.log("The cvc is ok!")
//     }
// }

// function informationIsCorrect() {
//     correctInformation = $("#correctInformation").get(0).value;

//     if (correctInformation == true) {
//         console.log("The information is correct!")
//     }
//     else {
//         console.log("The information is NOT correct!")
//     }
    
// }
}
