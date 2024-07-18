import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { DescricaoComponent } from './components/descricao/descricao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { AboutComponent } from './components/about/about.component';
import { HabilidadesComponent } from "./components/habilidades/habilidades.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, DescricaoComponent, ContatoComponent, ProjetosComponent, AboutComponent, HabilidadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Leandro-Zanatta';
}
