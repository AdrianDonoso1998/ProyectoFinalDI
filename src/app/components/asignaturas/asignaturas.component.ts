import { DatosService } from './../../services/datos.service';
import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/utils/Asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  asignaturasArrayBusqueda:Asignatura[]=[];
  asignaturasPintar: Asignatura[];


  constructor(private servicio: DatosService) { }

  ngOnInit(): void {
    this.asignaturasPintar = this.servicio.getAsignaturas()
  }
  buscarAsignaturas(nombre:string){
    this.asignaturasArrayBusqueda = [];
    this.asignaturasPintar.forEach((Asig)=>{
      if (Asig.nombre.toLowerCase().includes(nombre.toLowerCase())) {
        this.asignaturasArrayBusqueda.push(Asig);
      }
    })
     
  }
  buscarCiclos(ciclo:string){
    this.asignaturasArrayBusqueda = [];
    this.asignaturasPintar.forEach((Ciclo)=>{
      if (Ciclo.ciclo.toLowerCase().includes(ciclo.toLowerCase())) {
        this.asignaturasArrayBusqueda.push(Ciclo);
      }
    })
  }
    buscarConocimientos(nombre:string){
      this.asignaturasArrayBusqueda = [];
      this.asignaturasPintar.forEach((Asig)=>{
        if (Asig.conocimientos.includes) {
          this.asignaturasArrayBusqueda.push(Asig);
        }
      })
       
    }
  }

