import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Passengers Airlines';
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passenger',
      name: 'Passengers Details',
      exact: true
    },
    {
      link: '/about',
      name: 'About',
      exact: true
    },
    {
      link: '/contactus',
      name: 'Contact Us',
      exact: true
    },
  ];
}
