import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../shared/interfaces/user.interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../shared/interfaces/card.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from './payment.service';
import { Transaction } from '../shared/interfaces/transaction.interface';
import { finalize } from 'rxjs/operators';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';


@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

  user: User;
  paymentForm: FormGroup;
  isProcessingPayment = false;

  cards: Card[] = [
    {
      // valid card
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      // invalid card
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<PaymentDialogComponent>,
    private paymentService: PaymentService) {
      this.user = data;
  }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.paymentForm = this.formBuilder.group({
      val: [0.01, [Validators.required, Validators.min(0.01)]],
      creditCard: [this.cards[0], [Validators.required]]
    });
  }

  public isFormInvalid() {
    return !this.paymentForm.valid || this.isProcessingPayment ? 'disabled' : null;
  }

  private getTransaction() {
    const formValue = this.paymentForm.getRawValue();
    const transaction: Transaction = {
      card_number: formValue.creditCard.card_number,
      cvv: formValue.creditCard.cvv,
      expiry_date: formValue.creditCard.expiry_date,
      value: formValue.val,
      destination_user_id: this.user.id,
    };

    return transaction;
  }

  private openMessageDialog(success: boolean) {
    this.dialogRef.close();
    
    this.matDialog.open(MessageDialogComponent, {
      data: success
    });
  }

  public processPayment() {
    this.isProcessingPayment = true;

    const transaction = this.getTransaction();

    this.paymentService.sendPayment(transaction)
      .subscribe(res => {
        if (res.body['success'] && res.status === 200) {
          this.openMessageDialog(true);
        } else {
          this.openMessageDialog(false);
        }
      }, err => {
        console.log(err);
        this.openMessageDialog(false); 
      });
  }

}
