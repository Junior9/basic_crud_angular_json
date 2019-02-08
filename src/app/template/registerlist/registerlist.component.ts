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
  data;
  
  ngOnInit() {
    this.data = this.registerService.refreshList();
  }


  delete(id:string){
    this.registerService.delete(id);
  }

  updateForm(register:Register){
    this.registerService.update(register);
  }
}
