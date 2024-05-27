import { Component } from '@angular/core';

import { ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  gotoAngularPage() {
    window.open('https://angular.dev/', '_blank');
  }
}
