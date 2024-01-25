import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type ButtonColor = 'light' | 'dark' | 'accent';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  template: `
    <button class="btn btn--{{ color }}">
      <div class="btn-main">{{ text }}</div>
      <div class="btn-arrow">
        <img class="btn-arrow__icon" src="images/arrow.svg" />
      </div>
    </button>
  `,
  styleUrl: './button.component.scss',
  standalone: true,
})
export class ButtonComponent {
  @Input() text = '';
  @Input() color: ButtonColor = 'light';
}
