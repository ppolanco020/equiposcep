import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ubicacion'
})
export class UbicacionPipe implements PipeTransform {

  transform(value: number,ubicaciones: any[]): string {
    let t : any;
    for(t of ubicaciones){
      if(t.idubicacion == value){
        return t.ubicacion;
      }
    }
    return "No existe";
  }

}
