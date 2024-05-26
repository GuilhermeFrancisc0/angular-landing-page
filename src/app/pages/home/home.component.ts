import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './/headline/headline.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HeadlineComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
