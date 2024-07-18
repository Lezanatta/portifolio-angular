import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [NgClass],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})

export class ProjetosComponent {
  currentIndex: number = 0;
  imagemAtual: string = 'shopping.png';
  repositorio: string = 'https://github.com/Lezanatta/GeekShopping-';

  constructor() { }

  mudarImagem(imagem: string) {
    this.imagemAtual = imagem;

    if(this.imagemAtual == 'shopping.png'){
      this.repositorio = 'https://github.com/Lezanatta/GeekShopping-';
    }
    if(this.imagemAtual == 'viagens.png'){
      this.repositorio = 'https://github.com/Lezanatta/reserva-viagens';
    }
    if(this.imagemAtual == 'moments.png'){
      this.repositorio = 'https://github.com/Lezanatta/Moments';
    }
  }

  isImagemVisivel(imagem: string): boolean {
    return this.imagemAtual === imagem;
  }
}
