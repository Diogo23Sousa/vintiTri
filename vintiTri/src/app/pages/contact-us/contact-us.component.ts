import { Component, OnInit, Injectable } from '@angular/core';
import { EmailSender } from 'src/app/services/emailSender.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
@Injectable()
export class ContactUsComponent implements OnInit {
  subjectToContact = 'Shipping Information';
  nameToContact = '';
  emailToContact = '';
  messageToContact = '';

  // Variables used to provided dinamic styling
  messageWasSent = 'none';
  messageWasNotSent = 'none';
  emailIsNotValid = 'none';

  constructor(private emailSender: EmailSender) { }

  ngOnInit() {
  }


  sendContactMessage() {
    // If the input's are valid the validator will return true and the email will be validated;
    if (this.formValidator()) {
      // If they are valid we will check if the email is a valid String and only then the message will be sent
      if (this.emailToContact.includes('@')) {
        this.emailSender.sendContactEmail(this.subjectToContact, this.nameToContact, this.emailToContact, this.messageToContact);
        this.emailIsNotValid = 'none';
        this.messageWasNotSent = 'none';
        this.messageWasSent = '';

        // Reset the form to avoid consective calls
        this.emailToContact = '';
        this.messageToContact = '';
        this.nameToContact = '';
        window.scrollTo(0, 0);
      } else {
        this.messageWasSent = 'none';
        this.messageWasNotSent = '';
        this.emailIsNotValid = '';
        window.scrollTo(0, 0);
      }
    // If the validator returns false an alert message will be displayed to help the user fill the form.
    } else {
      console.log("Validation was unsucessfull!");
      this.emailIsNotValid = 
      this.messageWasSent = 'none';
      this.messageWasNotSent = '';
      window.scrollTo(0, 0);
    }
  }

  formValidator(): boolean {
    if (this.nameToContact === '' || this.emailToContact === '' || this.messageToContact === '') {
      return false;
    } else {
      return true;
    }
  }
}
