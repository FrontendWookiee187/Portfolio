import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslatePipe, TranslateDirective} from "@ngx-translate/core";

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslatePipe, TranslateDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  name = "Andreas";

}
