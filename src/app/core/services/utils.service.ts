import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  public excluirObjetoGrid<T>(
    array: T[],
    atributo: string,
    valor: any
  ): Array<T> {
    let i = array.length;

    while (i--) {
      if (
        array[i] &&
        array[i].hasOwnProperty(atributo) &&
        arguments.length > 2 &&
        array[i][atributo] === valor
      ) {
        array.splice(i, 1);
      }
    }

    return array;
  }

  public atualizarObjetoGrid<T>(
    array: T[],
    atributo: string,
    valor: any,
    objeto: any = null
  ): Array<T> {
    let i = array.length;

    while (i--) {
      if (
        array[i] &&
        array[i].hasOwnProperty(atributo) &&
        arguments.length > 2 &&
        array[i][atributo] === valor
      ) {
        array[i] = objeto;
      }
    }

    return array;
  }
}
