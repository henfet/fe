import { Component, OnInit } from '@angular/core';
import { PadresDeFamiliaService } from 'app/services/padres-de-familia.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-padres-de-familia',
  templateUrl: './padres-de-familia.component.html',
  styleUrls: ['./padres-de-familia.component.scss']
})
export class PadresDeFamiliaComponent implements OnInit {
  public listaPadres: TableData;

  constructor(private padresService: PadresDeFamiliaService) { }

  ngOnInit(): void {
    this.listaPadres = {
      headerRow: [ 'DNI', 'Nombre', 'Domicilio', 'Celular', 'Email', 'Fecha de nacimiento'],
      dataRows: [
        // ['0506199010512', 'Leonardo Alberto Davila Funez', 'La concordia, frente a la iglesia Luz del Mundo', '33098590', '', '23/04/1990'],
        // ['0512198600127', 'Alma Guevara Paz', 'Buenos Aires, 15 avenida 9 calle', '98872037', 'almague1986@gmail.com', '01/01/1986'],

      ]
    }
    this.cargarPadres();
  }

  cargarPadres() {
    {
      this.padresService.getAllPadres().subscribe({
        next: (response) => {
          this.listaPadres.dataRows = response.Data;
          console.log(`listaPadres.dataRows`);
          console.table(this.listaPadres.dataRows)
        }
      })
    }
  }

}
