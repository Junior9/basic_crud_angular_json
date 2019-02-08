import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {SregisterService} from '../../service/sregister.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: SregisterService) { }
  actionButton ="OK";
  ngOnInit() {
  	this.resetForm();
  }

  resetForm(form?:NgForm){
  	if(form != null){

  	}else{
  		this.registerService.formData = {
	  		id : null,
	  		name :"",
	  		email:"",
	  		description:""
  		}
  	}
  }

  onSubmit(register:NgForm){
    if(register.value.id == "" || register.value.id == null){
      this.registerService.save(register.value);
      this.resetForm(null);
    }else{
      this.registerService.update(register.value);
      this.registerService.refreshList();
      this.resetForm(null);
    }
  }
}