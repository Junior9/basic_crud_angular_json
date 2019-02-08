import { Component, OnInit } from '@angular/core';
import {SregisterService} from '../../service/sregister.service';
import {NgForm} from '@angular/forms';
import {Register} from '../../model/register';

@Component({
  selector: 'app-registerlist',
  templateUrl: './registerlist.component.html',
  styleUrls: ['./registerlist.component.css']
})
export class RegisterlistComponent implements OnInit {

  constructor(private registerService: SregisterService){ }
  
  ngOnInit() {}


  delete(id:string){
    this.registerService.delete(id);
  }

  update(register:Register){
    this.registerService.update(register);
  }

  data = [
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
