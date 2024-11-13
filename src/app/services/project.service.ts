import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from './global';
import { Project } from '../Models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
    
    public url:string | undefined;

    constructor( private _http: HttpClient) { 
        this.url = Global.url;
    }

  // Métodos del servicio
  getData() {
    return 'probando el metodo get del servicio de angular';
  }

  saveProject(project:Project){
      
    let params = JSON.stringify(project);
    let headers = new HttpHeaders().set('Content-Type','application/json');

    return this._http.post(this.url+'save-project',params, {headers:headers});

  }
}
