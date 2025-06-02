import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  @ViewChild('contentProjectOne') contentProjectOne!: ElementRef<HTMLDivElement>;
  @ViewChild('contentProjectTwo') contentProjectTwo!: ElementRef<HTMLDivElement>;
  @ViewChild('contentProjectThree') contentProjectThree!: ElementRef<HTMLDivElement>;
  @ViewChild('contentProjectFour') contentProjectFour!: ElementRef<HTMLDivElement>;
  @ViewChild('projectOne') projectOne!: ElementRef<HTMLDivElement>;
  @ViewChild('projectTwo') projectTwo!: ElementRef<HTMLDivElement>;
  @ViewChild('projectThree') projectThree!: ElementRef<HTMLDivElement>;
  @ViewChild('projectFour') projectFour!: ElementRef<HTMLDivElement>;

  visableProjectOne = true;
  visableProjectTwo = false;
  visableProjectThree = false;
  visableProjectFour = false; 
 
 switchProjectOne(): void {
    if (this.visableProjectTwo || this.visableProjectThree || this.visableProjectFour) {
      this.visableProjectOne = true;
      this.visableProjectThree = false;
      this.visableProjectFour = false;
      this.visableProjectTwo = false;

      this.contentProjectOne.nativeElement.style.display = 'flex';
      this.projectOne.nativeElement.style.background = '#2a3238';
      this.contentProjectTwo.nativeElement.style.display = 'none';
      this.projectTwo.nativeElement.style.background = 'none';      
      this.contentProjectThree.nativeElement.style.display = 'none';
      this.projectThree.nativeElement.style.background = 'none';
      this.contentProjectFour.nativeElement.style.display = 'none';
      this.projectFour.nativeElement.style.background = 'none';

  }
} 
 
  switchProjectTwo(): void {
    if (this.visableProjectOne || this.visableProjectThree || this.visableProjectFour) {
      this.visableProjectOne = false;
      this.visableProjectThree = false;
      this.visableProjectFour = false;
      this.visableProjectTwo = true;

      this.contentProjectOne.nativeElement.style.display = 'none';
      this.projectOne.nativeElement.style.background = 'none';
      this.contentProjectTwo.nativeElement.style.display = 'flex';
      this.projectTwo.nativeElement.style.background ='#2a3238';      
      this.contentProjectThree.nativeElement.style.display = 'none';
      this.projectThree.nativeElement.style.background = 'none';
      this.contentProjectFour.nativeElement.style.display = 'none';
      this.projectFour.nativeElement.style.background = 'none';

  }
}

switchProjectThree(): void {
    if (this.visableProjectOne || this.visableProjectTwo || this.visableProjectFour) {
      this.visableProjectOne = false;
      this.visableProjectThree = true;
      this.visableProjectFour = false;
      this.visableProjectTwo = false;

      this.contentProjectOne.nativeElement.style.display = 'none';
      this.projectOne.nativeElement.style.background = 'none';
      this.contentProjectTwo.nativeElement.style.display = 'none';      
      this.projectTwo.nativeElement.style.background = 'none';
      this.contentProjectThree.nativeElement.style.display = 'flex';
      this.projectThree.nativeElement.style.background = '#2a3238';
      this.contentProjectFour.nativeElement.style.display = 'none';
      this.projectFour.nativeElement.style.background = 'none';

  }
}

switchProjectFour(): void {
    if (this.visableProjectOne || this.visableProjectTwo || this.visableProjectThree) {
      this.visableProjectOne = false;
      this.visableProjectThree = true;
      this.visableProjectFour = true;
      this.visableProjectTwo = false;

      this.contentProjectOne.nativeElement.style.display = 'none';
      this.projectOne.nativeElement.style.background = 'none';
      this.contentProjectTwo.nativeElement.style.display = 'none'; 
      this.projectTwo.nativeElement.style.background = 'none';     
      this.contentProjectThree.nativeElement.style.display = 'none';
      this.projectThree.nativeElement.style.background = 'none';
      this.contentProjectFour.nativeElement.style.display = 'flex';
      this.projectFour.nativeElement.style.background = '#2a3238';     
      
    }
  }
}
