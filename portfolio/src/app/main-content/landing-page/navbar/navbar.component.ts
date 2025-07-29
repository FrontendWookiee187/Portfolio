import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeSection: string | null = null;

  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 86; // Höhe der Navbar
      const offset = 20; // Zusätzlicher Abstand
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      this.setActiveSection(sectionId);
    }
  }

}
