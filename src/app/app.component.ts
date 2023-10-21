import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trans_Better';

  isLoginPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.url === '/login'; // Mettez ici l'URL de la page de login
      }
    });
  }


  isNavbarOpen = true;
  isProfileOpen = false;
  selectedItem: string = ''; 

  handleItemClick(item: string): void {
    this.selectedItem = item; 
  }
  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }
  toggleVerticalNavbar() {

    this.isNavbarOpen = !this.isNavbarOpen;
  }

 
}
