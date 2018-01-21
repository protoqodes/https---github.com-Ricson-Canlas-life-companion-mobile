import { Injectable } from '@angular/core';
import { Http }  from '@angular/http';
// import Config from '../app/config';
import "rxjs/Rx"
@Injectable()
export class ApiService {
  constructor(private http :Http) { }

}