import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class EmailSender {
url: string;

constructor(private httpClient: HttpClient) {
this.url =  'http://localhost:4200/';
}

sendContactEmail(subject, name, email, message) {
  console.log("Sending a contact message from: " + name + " with the following email: " + email + " with the following message: " +
   message);
}

}
