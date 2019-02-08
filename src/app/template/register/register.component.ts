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

  onSubmit(form:NgForm){
  	this.registerService.save(form.value);
  	this.resetForm(null);
  }

}