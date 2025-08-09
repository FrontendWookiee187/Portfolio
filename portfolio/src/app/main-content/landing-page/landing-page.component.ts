import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { WhyMeComponent } from '../why-me/why-me.component';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-landing-page',
    imports: [CommonModule, NavbarComponent, WhyMeComponent, TranslatePipe],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private translate: TranslateService) {}

  isOverlayOpen = false;
  menuActive = false;
  shapeHovered = false;

  toggleOverlay() {
    this.isOverlayOpen = !this.isOverlayOpen;
    this.menuActive = !this.menuActive;
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

}
