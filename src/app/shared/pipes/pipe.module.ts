import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardPipe } from './card.pipe';


@NgModule({
  declarations: [
    CardPipe
  ],
  imports: [CommonModule],
  exports: [
    CardPipe
  ],
  providers: [
    CardPipe
  ],
})
export class PipeModule {}
