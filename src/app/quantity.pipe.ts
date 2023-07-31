import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe implements PipeTransform {

  transform(value: number, nbPersonne: number): unknown {

    return value*nbPersonne;

  }

}
