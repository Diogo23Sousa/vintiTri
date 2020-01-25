import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingService } from './shopping.service';
import { MyOrderDetails } from '../models/my-order-details';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmailService {
private url: string;

constructor(private httpClient: HttpClient, private shoppingService: ShoppingService) {
this.url =  'http://localhost:3000';
}

testMyServer() {
  console.log("I'm on emailServices testing my endpoint!!!!");
  return this.httpClient.get(this.url);
}

sendContactEmail(subject, name, email, message) {
  console.log('Subject: ' + subject + ', name: ' + name + ', email: ' + email + ', message: ' + message);
}

sendThisOrder(myOrderDetails: MyOrderDetails) {
  console.log("I'm on emailSenderServicesending to the email: " + myOrderDetails.email + " and the order is: " + JSON.stringify(myOrderDetails.myItem));
  return this.httpClient.post<MyOrderDetails>(this.url.concat('/sendmail'), JSON.stringify(myOrderDetails), httpOptions).subscribe(x => console.log(x));
}
}
