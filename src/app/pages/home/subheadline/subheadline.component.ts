import { Component } from '@angular/core';
import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-subheadline',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './subheadline.component.html',
  styleUrl: './subheadline.component.scss'
})
export class SubheadlineComponent {
  gotoAngularPage() {
    window.open('https://angular.dev/', '_blank');
  }
}
