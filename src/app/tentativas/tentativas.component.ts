import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  @Input() public tentativas: number;

  constructor() {
    console.log(this.coracoes);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      const indice = (this.coracoes.length - 1) - this.tentativas;
      this.coracoes[indice].setCheio(false);
    }
  }

}
