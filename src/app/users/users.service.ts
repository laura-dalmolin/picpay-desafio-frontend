import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.listApi + '/v2';

@Injectable({ providedIn: 'root' })
export class UsersService {

  constructor(private http: HttpClient) {}

  getUsers(id: string) {
    const url = `${API}/${id}`;
    return this.http.get(url, { observe: 'response' });
  }

}
