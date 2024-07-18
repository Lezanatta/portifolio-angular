import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [NgFor],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {

  flipCards = [
    { imageUrl: '../../../assets/angular.png', text: 'Framework Angular' },
    { imageUrl: '../../../assets/aws.png', text: 'Serviços AWS' },
    { imageUrl: '../../../assets/c.png', text: 'Programação .NET Core' },
    { imageUrl: '../../../assets/Docker.png', text: 'Gerenciamento de containers, imagens utilizando Docker' },
    { imageUrl: '../../../assets/git.png', text: 'Gerenciamento de repositório com Git e Github' },
    { imageUrl: '../../../assets/js.png', text: 'Programação com Javascript' },
    { imageUrl: '../../../assets/Scrum.png', text: 'Experiência com Metodologia ágil Scrum' },
    { imageUrl: '../../../assets/sql.png', text: 'Experiência com Banco de dados PL/SQL' },
  ];

}
