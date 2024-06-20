// button-form.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-form',
  template: `
    <button [style.width.px]="width" [style.background-color]="backgroundColor" (click)="onClick()">
      {{ text }}
    </button>
  `,
  styles: [`
    button {
      height: 48px;
      border: none;
      border-radius: 24px;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class ButtonFormComponent {
  @Input() text: string = 'Button';
  @Input() width: number = 200;
  @Input() backgroundColor: string = 'blue';
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
