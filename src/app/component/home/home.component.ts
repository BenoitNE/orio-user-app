import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingUtil } from '../../util/routing-util';
import { ImagePathUtil } from '../../util/image-path-util';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  version : string = 'Orio version Angular en cours de développement...';
  avatarPath: string = ImagePathUtil.avatarOrioIntro;

  constructor(private router: Router) {}

  startButtonClick(): void {
    this.router.navigate([RoutingUtil.jobDescriptionStudyDurationForm]);
  }
}
