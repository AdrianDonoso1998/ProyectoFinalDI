import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Asignatura } from 'src/app/utils/Asignatura';
import {DatosService} from './../../services/datos.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {

  @Input() asignatura: Asignatura;
  pintarAsignatura:Asignatura[];
  constructor(private servicioAsignatura:DatosService) {
  

   }

  ngOnInit(): void {
    this.pintarAsignatura = this.servicioAsignatura.getAsignaturas();
  }
}
