import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask',
})
export class CardPipe implements PipeTransform {
  transform(card: string) {
    const lastDigits = card.slice(-4);
    return 'XXXX '.repeat(3) + lastDigits;
  }
}
