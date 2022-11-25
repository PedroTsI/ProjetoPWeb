import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {
  transform(valor: string | undefined): string | undefined {
    if (valor && valor.length === 11) {
      return `(${valor.substr(0, 2)})${valor.substr(2, 5)}-${valor.substr(7, 4)}`;
    }
    if (valor && valor.length === 8){
      return `${valor.substr(0,4)}-${valor.substr(4,8)}`
    }
    return valor;
  }
}
