import { Component } from '@angular/core';

import { ButtonComponent } from '../../../components/button/button.component';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [CardComponent, ButtonComponent],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.scss'
})
export class BenefitComponent {
  items = [
    {
      title: 'Melhora na atuação da equipe',
      imgPath: 'assets/team.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.',
    },
    {
      title: 'Seus projetos guiados do zero',
      imgPath: 'assets/project-guide.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.',
    }
  ]
}
