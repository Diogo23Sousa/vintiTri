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

checkServerStatus() {
  return this.httpClient.get<string>(this.url.concat('/serverstatus'));
}

sendContactEmail(subject, name, email, message) {
  console.log('Subject: ' + subject + ', name: ' + name + ', email: ' + email + ', message: ' + message);
}

sendThisOrder(myOrderDetails: MyOrderDetails) {
  console.log("I'm on email service sending myOrder to this email:" + myOrderDetails.email);
  return this.httpClient.post<MyOrderDetails>(this.url.concat('/sendmail'), myOrderDetails, httpOptions);
}
}
