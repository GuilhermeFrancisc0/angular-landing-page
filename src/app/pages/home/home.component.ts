import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { SubheadlineComponent } from './subheadline/subheadline.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeadlineComponent,
    SubheadlineComponent,
    NewsletterFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
