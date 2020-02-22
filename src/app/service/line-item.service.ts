import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonResponse } from '../model/json-response.class';
import { LineItem } from '../model/line-item.class';
import { Request } from '../model/request.class';

const url: string = "http://localhost:8080/line-items/";

@Injectable({
  providedIn: 'root'
})

export class LineItemService {

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<JsonResponse>{
    return this.http.get(url) as Observable<JsonResponse>;
  }

  create(lineItem: LineItem): Observable<JsonResponse>{
    return this.http.post(url, lineItem) as Observable<JsonResponse>;
  }
  
  get(id: number): Observable<JsonResponse>{
    return this.http.get(url+id) as Observable<JsonResponse>;
  }

  edit(lineItem: LineItem): Observable<JsonResponse>{
    return this.http.put(url, lineItem) as Observable<JsonResponse>;
  }
  
  delete(id: number): Observable<JsonResponse>{
    return this.http.delete(url+id) as Observable<JsonResponse>;
  }

  linesForRequest(id:number): Observable<JsonResponse>{
    return this.http.get(url+"lines-for-pr/"+id) as Observable<JsonResponse>
  }

}
