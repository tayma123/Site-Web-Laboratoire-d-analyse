import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Analyse } from "../model/analyse";


@Injectable({providedIn :"root"})
export class AnalysesService{
  private host=environment.host;
    constructor(private http: HttpClient){
     
    }
    public getAllAnalyses():Observable<Analyse[]>{
        
        return this.http.get<Analyse[]>(this.host+"/analyse/all");
    }
    public addAnalyse(analyse: Analyse):Observable<Analyse>{
        
        return this.http.post<Analyse>(this.host+"/analyse/add", analyse);
    }
    public updateAnalyse(analyse: Analyse):Observable<Analyse>{
        
      return this.http.post<Analyse>(this.host+"/analyse/update", analyse);
  }
  public deleteAnalyse(name:String): Observable<void> {
    return this.http.delete<void>(`${this.host}/analyse/delete/${name}`);
  }

  }