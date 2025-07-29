import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeSection: string | null = null;

  constructor(private translate: TranslateService, private router: Router) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }

  navigateToHome(event: Event) {
    event.preventDefault();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      // Falls bereits auf der Hauptseite, scrolle zum Hero-Bereich
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    
    // Überprüfen, ob wir bereits auf der Hauptseite sind
    if (this.router.url !== '/') {
      // Falls nicht auf der Hauptseite, navigiere erst zur Hauptseite
      this.router.navigate(['/']).then(() => {
        // Warte kurz, bis die Navigation abgeschlossen ist
        setTimeout(() => {
          this.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      // Falls bereits auf der Hauptseite, scrolle direkt
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string) {
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
