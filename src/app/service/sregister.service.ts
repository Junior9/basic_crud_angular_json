import { Injectable } from '@angular/core';
import {Register} from '../model/register';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SregisterService {

	formData : Register;

  	constructor(private http:HttpClient) { }

  	save(formData:Register){
  		console.log("Save new register with name :" + formData.name);
  		this.http.post("url/save",formData);
  	}
  	update(formData:Register){
  		console.log("Update register id :" + formData.id);
  	}

  	delete(id:string){
  		console.log("Delete Registes : " + id);
  	}


}
