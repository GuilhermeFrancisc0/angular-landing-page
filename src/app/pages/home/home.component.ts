import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { HeadlineComponent } from './components/headline/headline.component';

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
