import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { PipeModule } from './shared/pipes/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [AppComponent, MessageDialogComponent, PaymentDialogComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CurrencyMaskModule,
    MatDialogModule,
    MatIconModule,
    PipeModule,
    ReactiveFormsModule,
    UsersModule,
  ],
  entryComponents: [MessageDialogComponent, PaymentDialogComponent],
  providers: [PipeModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
