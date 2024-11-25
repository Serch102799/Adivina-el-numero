import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../services/game-api.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  numero: number = 0;
  mensaje: string = '';
  messageColor: string = '';  

  constructor(private api: GameApiService) {}

  ngOnInit() {}

  async onClickAdivinar() {
    try {
      this.mensaje = '';
      this.messageColor = '';

      const data = await this.api.guess(this.numero);

      if (data.message === "Adivinaste el número") {
        this.mensaje = data.message;
        this.messageColor = 'success'; 
      } else {
        this.mensaje = data.message;
        this.messageColor = 'neutral'; 
      }
    } catch (error: any) {
      if (error && error.error && error.error.message) {
        this.mensaje = error.error.message;
      } else {
        this.mensaje = 'Error desconocido al intentar adivinar.';
      }
      this.messageColor = 'error';  
    }
  }

  async onClickReiniciar() {
    await this.api.restart();
    this.mensaje = '';
    this.numero = 0;
    this.messageColor = '';  
  }
}
