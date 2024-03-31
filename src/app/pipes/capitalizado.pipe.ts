import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = false): string {
    
    value = value.toLocaleLowerCase();
    let nombres:string[] = value.split(' ');

    if (todas) {
      nombres = nombres.map( nombre =>{
            return nombre.toLocaleUpperCase();
        //return nombre[0].toLocaleUpperCase() + nombre.substring(1);
              //Hago mayuscula la primera letra y luego lo concateno con el resto de la cadena 
      });
    } else{
      nombres = nombres.map(nombre =>{
        return nombre[0].toLocaleUpperCase() + nombre.substring(1);
      });
      //nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substring(1);
      // Aca arriba me paro en el primer nombre y luego en la primera letra "[0][0]"
    }
    return nombres.join(' ');
  }

}
