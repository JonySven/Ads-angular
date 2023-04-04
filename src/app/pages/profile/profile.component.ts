import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  adress: any[]

  profileForm: FormGroup = new FormGroup({
    'userName': new FormControl('', Validators.email),
    'userTel': new FormControl(),
    'userAdress': new FormControl(),
  })

  passwordForm: FormGroup = new FormGroup({
    'password': new FormControl(),
    'newPassword': new FormControl()
  })

  ngOnInit(){
    this.adress = [
      {name: 'Симферополь', code: '82'},
      {name: 'Севастополь', code: '92'},

    ]
  }

  updateUser(){
    console.log(this.profileForm.value); 
  }
  updatePassword(){
    console.log(this.passwordForm.value);
    
  }
}
