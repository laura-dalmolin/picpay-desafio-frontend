import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent implements OnInit { 

  messages = new Map([
    [true, 'O pagamento foi concluído com sucesso'],
    [false, 'O pagamento NÃO foi concluído com sucesso']
  ]);

  selectedMessage = '';

  constructor(@Inject(MAT_DIALOG_DATA) data) { 
    this.selectedMessage = this.messages.get(data);
  }

  ngOnInit() {
  }

}
