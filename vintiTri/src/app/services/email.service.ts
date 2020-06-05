import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShoppingService } from './shopping.service';
import { MyOrderDetails } from '../models/my-order-details';
import { ContactForm } from '../models/contact-form';

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


sendContactEmail(contactForm: ContactForm) {
   return this.httpClient.post<ContactForm>(this.url.concat('/sendemail'), JSON.stringify(contactForm), httpOptions);
}

sendFeedBackEmail(contactForm: ContactForm) {
    return this.httpClient.post<ContactForm>(this.url.concat('/sendfeedback'), JSON.stringify(contactForm), httpOptions);
}

sendThisOrder(myOrderDetails: MyOrderDetails) {
   return this.httpClient.post<MyOrderDetails>(this.url.concat('/sendorder'), JSON.stringify(myOrderDetails), httpOptions);
}
}
