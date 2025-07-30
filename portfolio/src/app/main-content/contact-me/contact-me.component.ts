import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {

  checked = false;
  checkboxError = false;
  showSuccessMessage = false;

  // Objekt zur Verfolgung von Feldfehlern
  fieldErrors = {
    name: false,
    email: false,
    message: false
  };

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  mailTest = false;

  post = {
    endPoint: 'https://www.grabowski-daniel.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {

    if (!this.checked) {
    this.checkboxError = true;
    return;
  }
  this.checkboxError = false;


    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.showSuccessMessage = true;
            this.hideSuccessMessageAfterDelay();
            this.resetContactData();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.showSuccessMessage = true;
      this.hideSuccessMessageAfterDelay();
      this.resetContactData();
    }

    this.checked = false;
  }

  onCheckboxClick(event: Event) {
  event.stopPropagation();
  this.checked = !this.checked;
  this.checkboxError = false;
}

  // Methode zur Behandlung von Blur-Events auf Eingabefeldern
  onFieldBlur(fieldName: string, event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = target.value.trim();
    
    switch (fieldName) {
      case 'name':
        this.fieldErrors.name = !value || value.length < 1;
        break;
      case 'email':
        const emailPattern = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        this.fieldErrors.email = !value || !emailPattern.test(value);
        break;
      case 'message':
        this.fieldErrors.message = !value || value.length < 4;
        break;
    }
  }

  // Methode zur Behandlung von Input-Events (Eingabe wird getippt)
  onFieldInput(fieldName: string) {
    // Fehler löschen, sobald der Benutzer anfängt zu tippen
    switch (fieldName) {
      case 'name':
        if (this.contactData.name.trim().length > 0) {
          this.fieldErrors.name = false;
        }
        break;
      case 'email':
        if (this.contactData.email.trim().length > 0) {
          this.fieldErrors.email = false;
        }
        break;
      case 'message':
        if (this.contactData.message.trim().length >= 4) {
          this.fieldErrors.message = false;
        }
        break;
    }
  }

  // Methode zum Zurücksetzen der Kontaktdaten
  resetContactData() {
    this.contactData = {
      name: "",
      email: "",
      message: "",
    };
  }

  // Methode zum automatischen Ausblenden der Erfolgsmeldung nach 5 Sekunden
  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 5000);
  }

}
