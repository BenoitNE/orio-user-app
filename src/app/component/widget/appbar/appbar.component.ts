import { Component, Input } from '@angular/core';

@Component({
  selector: 'appbar',
  template: `<mat-toolbar [style.background-color]="color">AppBar</mat-toolbar>`,
  styles: [`
    mat-toolbar {
      height: 64px;
    }
  `]
})
export class AppBarFormComponent {
  @Input() color: string = '';
}