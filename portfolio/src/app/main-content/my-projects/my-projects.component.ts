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

  visableProjectOne = true;
  visableProjectTwo = false;
  visableProjectThree = false;
  visableProjectFour = false;

 
 
 switchProjectOne(){
    if (this.visableProjectTwo || this.visableProjectThree || this.visableProjectFour) {
      this.visableProjectOne = true;
      this.visableProjectThree = false;
      this.visableProjectFour = false;
      this.visableProjectTwo = false;

      this.contentProjectOne.nativeElement.style.display = 'flex';
      this.contentProjectTwo.nativeElement.style.display = 'none';      
      this.contentProjectThree.nativeElement.style.display = 'none';
      this.contentProjectFour.nativeElement.style.display = 'none';

  }
}
 
 
 
  switchProjectTwo(){
    if (this.visableProjectOne || this.visableProjectThree || this.visableProjectFour) {
      this.visableProjectOne = false;
      this.visableProjectThree = false;
      this.visableProjectFour = false;
      this.visableProjectTwo = true;

      this.contentProjectOne.nativeElement.style.display = 'none';
      this.contentProjectTwo.nativeElement.style.display = 'flex';      
      this.contentProjectThree.nativeElement.style.display = 'none';
      this.contentProjectFour.nativeElement.style.display = 'none';

  }
}

switchProjectThree(){
    if (this.visableProjectOne || this.visableProjectTwo || this.visableProjectFour) {
      this.visableProjectOne = false;
      this.visableProjectThree = true;
      this.visableProjectFour = false;
      this.visableProjectTwo = false;

      this.contentProjectOne.nativeElement.style.display = 'none';
      this.contentProjectTwo.nativeElement.style.display = 'none';      
      this.contentProjectThree.nativeElement.style.display = 'flex';
      this.contentProjectFour.nativeElement.style.display = 'none';

  }
}

switchProjectFour(){
    if (this.visableProjectOne || this.visableProjectTwo || this.visableProjectThree) {
      this.visableProjectOne = false;
      this.visableProjectThree = true;
      this.visableProjectFour = true;
      this.visableProjectTwo = false;

      this.contentProjectOne.nativeElement.style.display = 'none';
      this.contentProjectTwo.nativeElement.style.display = 'none';      
      this.contentProjectThree.nativeElement.style.display = 'none';
      this.contentProjectFour.nativeElement.style.display = 'flex';

  }
}

}
