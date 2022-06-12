import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {


  //i18nSelect
  nombre: string = 'Leonal';
  genero: string = 'Masculino';

invitacionMapa = {
  'Masculino' : 'Invitarlo',
  'Femenino' : 'Invitarla'
}

  //i18nPlurarl

  clientes : string[] = ['Maria', 'Juan', 'Pedro', 'Ana', 'Juana', 'Jorge'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.'
    ,'=1': 'tenemos un cliente esperando.'
    ,'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
        this.nombre = 'Maria';
        this.genero = 'Femenino';
  }

  borrarCliente(){
      this.clientes.splice(0,1);
  }


  //KeyValue Pipe

  persona = {
    nombre: 'Leonal',
    edad: 30,
    direccion: 'Calle falsa 123'
  }

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },

    {
      nombre: 'Batman',
      vuela: true,
    },

    {
      nombre: 'Aquaman',
      vuela: true,
    }

  ];

  //Async Pipe
  miObservable = interval(5000);
  valorPromesa = new Promise((resolve, reject) => {

      setTimeout(() => {
        resolve('Tenemos Data de promesa');
      },3500);
  });

}
