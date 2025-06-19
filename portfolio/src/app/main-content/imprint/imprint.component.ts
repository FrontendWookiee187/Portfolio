import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({ top: 600, behavior: 'auto' });
  }

}
