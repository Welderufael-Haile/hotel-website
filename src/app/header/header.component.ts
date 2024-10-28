// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { AppComponent } from '../app.component';

// @Component({
//   selector: 'app-header',
//   standalone: true,
//   imports: [RouterLink,AppComponent],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component"; // Import CommonModule

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterOutlet, FooterComponent] // Include CommonModule for ngIf and other directives
 // Include CommonModule for ngIf and other directives
})
export class HeaderComponent {
  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

