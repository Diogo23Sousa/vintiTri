import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ContactForm } from 'src/app/models/contact-form';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  rating = 'Excelent';
  nameToContact = '';
  emailToContact = '';
  messageToContact = '';

  // Variables used to provided dinamic styling
  messageWasSent = 'none';
  messageWasNotSent = 'none';
  emailIsNotValid = 'none';

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }


  sendContactMessage() {
    // If the input's are valid the validator will return true and the email will be validated;
    if (this.formValidator()) {
      // If they are valid we will check if the email is a valid String and only then the message will be sent
      if (this.emailToContact.includes('@')) {
        var myFeedBackMessage = new ContactForm(this.rating, this.nameToContact, this.emailToContact, this.messageToContact);
        this.emailService.sendFeedBackEmail(myFeedBackMessage).subscribe(sendContactMessage => console.log(sendContactMessage));
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
