import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer:DomSanitizer) {
    
  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    //Como resivo un URL devo sanitizar, por eso importo el DomSanitizer de '@angular/platform-browser'
    //CUIDADO!!, esto solo lo devo hacer si confio en el URL
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
