import { Injectable } from '@angular/core';
import {Register} from '../model/register';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SregisterService {

  api = "url/"; 
	formData : Register;

  constructor(private http:HttpClient) { }  

  save(register:Register){
  	console.log("Save new register with name :" + register.name);
  	this.http.post(this.api + "save",register);
  }
  
  update(register:Register){
  	console.log("Update register id :" + register.id);
    this.formData = register;
  }

  delete(id:string){
  	console.log("Delete Registes : " + id);
  }

  refreshList(){
    //return this.http.get(this.api + "getList",);
    return  [
      {
        id: 0,
        name: "Pedro",
        email: "exemplo1@gmail.com",
        description:""
       },
      {
        id: 1,
        name: "Jaoao",
        email: "exemplo2@gmail.com",
         description:""
       },
       {
         id: 2,
         name: "Mohamad",
         email: "exemplo3@gmail.com",
         description:""
       },
    ]
  }


}
