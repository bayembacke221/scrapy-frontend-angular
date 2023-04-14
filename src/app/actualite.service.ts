import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { environment } from "src/environments/environment";
import { Actualites } from "./actualites";

@Injectable({
  providedIn:'root'
})
export class ActualitesService {

  private apiServerUrl=environment.apiBaseUrl;
  constructor(private http: HttpClient){}

  public getActualite():Observable<Actualites[]>{
    return this.http.get<Actualites[]>(`${this.apiServerUrl}/api/v1/quotes/all`);
  }

}
