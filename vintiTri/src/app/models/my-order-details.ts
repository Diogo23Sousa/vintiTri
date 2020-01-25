import { MyItem } from './my-item';

export class MyOrderDetails {
    firstAndLastName: string;
    email: string;
    phoneNumber: string;
    adressLine: string;
    zipCode: string;
    city: string;
    country;
    cardNumber: string;
    expirationDate: string;
    cvc: string;
    myItem: MyItem;

    constructor(firstAndLastName, email, phoneNumber, adressLine, zipCode, city, country, cardNumber, expirationDate, cvc, myItem) {
    this.firstAndLastName = firstAndLastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.adressLine = adressLine;
    this.zipCode = zipCode;
    this.city = city;
    this.country = country;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.cvc = cvc;
    this.myItem = myItem;
    }
    }