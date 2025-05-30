import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { WhyMeComponent } from './main-content/why-me/why-me.component';
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainContentComponent, FooterComponent, WhyMeComponent, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
        this.translate.addLangs(['de', 'en']);
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }
}
