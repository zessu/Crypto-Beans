import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasefirst'
})
export class UpperCasefirstPipe implements PipeTransform {
  transform(value: string, args?: string): string {
    return value.charAt(0).toUpperCase().concat(value.substring(1))
  }
}
