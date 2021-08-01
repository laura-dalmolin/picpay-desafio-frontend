import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/interfaces/transaction.interface';

const API = environment.paymentApi + '/v3';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  sendPayment(transaction: Transaction) {
    const url = API + '/533cd5d7-63d3-4488-bf8d-4bb8c751c989';
    return this.http.post(url, {transaction}, {observe: 'response'});
  }

}
