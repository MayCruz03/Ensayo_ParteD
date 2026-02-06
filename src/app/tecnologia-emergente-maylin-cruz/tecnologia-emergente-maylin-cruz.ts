import { Component } from '@angular/core';

@Component({
  selector: 'app-tecnologia-emergente-maylin-cruz',
  imports: [],
  templateUrl: './tecnologia-emergente-maylin-cruz.html',
  styleUrl: './tecnologia-emergente-maylin-cruz.css',
})
export class TecnologiaEmergenteMaylinCruz {
  message: string = '';

  showMessage() {
    this.message = "Botón para prueba 1";
  }
}
