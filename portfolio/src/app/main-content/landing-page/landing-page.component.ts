import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { WhyMeComponent } from '../why-me/why-me.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, WhyMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  isOverlayOpen = false;
  menuActive = false;

  toggleOverlay() {
    this.isOverlayOpen = !this.isOverlayOpen;
    this.menuActive = !this.menuActive;
  }

}
