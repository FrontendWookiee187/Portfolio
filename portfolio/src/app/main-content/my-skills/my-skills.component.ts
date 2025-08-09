import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Skill {
  name: string;
  image: string;
}

@Component({
    selector: 'app-my-skills',
    imports: [TranslatePipe],
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  /** Array of main technical skills */
  skills: Skill[] = [
    { name: 'HTML', image: 'assets/img/myskills/html_new.png' },
    { name: 'CSS', image: 'assets/img/myskills/css_new.png' },
    { name: 'JavaScript', image: 'assets/img/myskills/javascript_new.png' },
    { name: 'Angular', image: 'assets/img/myskills/angular_new.png' },
    { name: 'TypeScript', image: 'assets/img/myskills/typescript_new.png' },
    { name: 'Git', image: 'assets/img/myskills/git_new.png' },
    { name: 'Firebase', image: 'assets/img/myskills/firebase_new.png' },
    { name: 'REST API', image: 'assets/img/myskills/api_new.png' },
    { name: 'Scrum', image: 'assets/img/myskills/scrum.png' }
  ];
}
