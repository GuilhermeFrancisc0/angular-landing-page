import { Component } from '@angular/core';

import { ArticleComponent } from './article/article.component';
import { BenefitComponent } from './benefit/benefit.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { SubheadlineComponent } from './subheadline/subheadline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeadlineComponent,
    SubheadlineComponent,
    NewsletterFormComponent,
    BenefitComponent,
    ArticleComponent,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
