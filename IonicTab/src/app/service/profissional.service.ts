import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { profissional } from '../models/profissional.models';

const API_URL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json; charset=utf-8'}
  )
};

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) { }

  //Crud
  AddProf(prof: profissional){
    return this.http.post(`${API_URL}/profissional`, prof, httpOptions)
  }

  getAllProf(){//?email=${email}email: string
    return this.http.get<profissional[]>(`${API_URL}/profissional`, httpOptions)
  }

  getProfissional(email:string){
    return this.http.get<profissional[]>(`${API_URL}/profissional/${email}`, httpOptions)
  }

  upDateProf(prof: profissional){
    return this.http.post(`${API_URL}/profissional`, prof, httpOptions)
  }
  
  delete(batatafrita: string){
    return this.http.delete(`${API_URL}/profissional/${batatafrita}`, httpOptions)
  }
}
