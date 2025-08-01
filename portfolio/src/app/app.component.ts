import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import {
    TranslateService
} from "@ngx-translate/core";
import { NavbarComponent } from './main-content/landing-page/navbar/navbar.component';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, NavbarComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  showLandingPage = true;

  constructor(private translate: TranslateService, private router: Router) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');

        // Listen to router events to determine if landing page should be shown
        this.router.events.pipe(
          filter(event => event instanceof NavigationEnd)
        ).subscribe((event) => {
          if (event instanceof NavigationEnd) {
            this.showLandingPage = !event.url.includes('/imprint');
          }
        });
    }
}
