import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  label: string = "";
  @Input()
  disabled: boolean = false;
  @Input()
  loading: boolean = false;
  @Input()
  variant: BtnVariants = "primary";

  @Output("click")
  handleClick = new EventEmitter();

  onClick() {
    this.handleClick.emit();
  }
}
