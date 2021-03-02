import { DatosService } from './../../services/datos.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Ciclos} from 'src/app/utils/Ciclos';
import {Asignatura} from 'src/app/utils/Asignatura'
import {CiclosService} from 'src/app/services/ciclos.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {
  @Input() ciclos:Ciclos;
  pintarAsignaturaDaw:Asignatura[]=[];
  pintarAsignaturaDam:Asignatura[]=[];
  pintarCiclos:Ciclos[]=[];
  //ActivatedRouted
  numero:number;
  elementos: string[]= [];
  elementosJSON: any[] = [];
  constructor(private gestorRutasActivas: ActivatedRoute, private servicioDatos: DatosService, private servicioCiclos:CiclosService) { 
    

  }

  ngOnInit(): void {
    
    this.pintarAsignaturaDam = this.servicioDatos.getCursoDam();
    this.pintarAsignaturaDaw = this.servicioDatos.getCursoDaw();
    this.pintarCiclos = this.servicioCiclos.getCiclos();
    // //console.log(this.gestorRutasActivas.snapshot.paramMap.get('id')); 
    // //this.numero =  parseInt(this.getorRutasActivas.snapshot.paramMap.get('id'));
    // this.gestorRutasActivas.paramMap.subscribe(param=>{
    //   //console.log(param.get('id'));
    //   this.numero = parseInt(param.get('id'));
    //   console.log(this.numero);
      
    //   switch (this.numero) {
    //     case 1:
    //     //console.log(this.servicioDatos.getArrayUno());
    //     this.elementos = this.servicioDatos.getArrayUno();
    //     break;
   
    //     case 2:
    //       this.elementos = this.servicioDatos.getArrayDos();
    //     break;  
    //   }
    //   this.elementosJSON = this.servicioDatos.getElementosJSON();  
    // })
    // //console.log(this.numero);
    
    // //console.log(this.servicioDatos.getArrayUno());
  }

}
