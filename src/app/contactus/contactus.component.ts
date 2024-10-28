// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contactus',
//   standalone: true,
//   imports: [],
//templateUrl: './contactus.component.html',
//   styleUrl: './contactus.component.css'
// })
// export class ContactusComponent {

// }
import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
})
export class ContactUsComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  onSubmit() {
    // Handle form submission
    console.log('Email:', this.email);
    console.log('Password:', this.password); // Be cautious with this
    console.log('Message:', this.message);

    // Here, you could send this data to a backend server
  }
}
