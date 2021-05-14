import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rdv } from '../model/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private host=environment.host;

  constructor(private http: HttpClient) { }
  public getAllRdv():Observable<Rdv[]>{
        
    return this.http.get<Rdv[]>(this.host+"/rdv/all");
}
public addRdv(rdv: Rdv):Observable<Rdv>{
    
    return this.http.post<Rdv>(this.host+"/rdv/add",rdv);
}
public updateRdv(rdv: Rdv):Observable<Rdv>{
    
  return this.http.post<Rdv>(this.host+"/rdv/update", rdv);
}
//public deleteUser(email: String):Observable<void>{
    
   // return this.http.delete<void>(this.host+"/user/delete/"+email);
// }
   
public deleteUser(email: String): Observable<void> {
return this.http.delete<void>(`${this.host}/user/delete/${email}`);
}
}
