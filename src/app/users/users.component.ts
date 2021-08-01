import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from '../shared/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService,
    public matDialog: MatDialog) {}

  ngOnInit() {
    const id = '5d531c4f2e0000620081ddce';
    this.usersService.getUsers(id).subscribe((res) => {
      if (res.status === 200) {
        this.users = res.body as User[];
      }
    }, err => {
      console.log(err);
    });
  }

  openPaymentDialog(user: User) {
    this.matDialog.open(PaymentDialogComponent, {
      data: user,
    });
  }
}
