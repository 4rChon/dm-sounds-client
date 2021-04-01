import { HttpHeaders } from '@angular/common/http';

export class ApiConstants {
  static jsonHeaders = new HttpHeaders({ 'content-type': 'application/json' });
}
