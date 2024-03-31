import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  nombre:string = 'Capitan America';
  nombre2:string = 'MarTIn lOpeZ';

  arreglo:number[] = [1,2,3,4,5,6,7,8,9,10];

  PI:number = Math.PI;

  porcentaje:number = 0.234;

  salario:number = 1234.5;

  fecha:Date = new Date();

  idioma:string = 'es';

  videoUrl:string = 'https://www.youtube.com/embed/SigIbCVMTzU?si=9CNjiKw9nuWkk4WU';

  activar:boolean = true;

  valorPromesa = new Promise<string> ((res) =>{
    setTimeout(()=>{
      res('Llego la data');
    },4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }



}
