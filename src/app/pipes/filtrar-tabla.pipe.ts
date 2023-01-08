import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarTabla'
})
export class FiltrarTablaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultado = [];
    for (const nombre of value) {
      if( nombre.nompaciente.toLowerCase().indexOf(args) > -1 || 
          nombre.nompaciente.toUpperCase().indexOf(args) > -1 || 
          nombre.nompaciente.indexOf(args) > -1){
            resultado.push(nombre);
      }
    }
    return resultado;
  }
}
