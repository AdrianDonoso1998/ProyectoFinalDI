import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {Ciclos} from 'src/app/utils/Ciclos';

@Injectable({
  providedIn: 'root'
})
export class CiclosService {
  ciclos:Ciclos[]=[
    {
      nombre: 'DAM',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAM',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/dam.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 1,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
    {
      nombre: 'DAW',
      curso: 2,
      asignaturas: [],
      imagen: 'assets/images/daw.jpeg',
    },
  ];
 
  constructor() { }

  getCiclos(): Ciclos[]{
    return this.ciclos;
  }
  
  
}

