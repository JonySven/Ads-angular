import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auterization',
  templateUrl: './auterization.component.html',
  styleUrls: ['./auterization.component.scss']
})
export class AuterizationComponent {
  value: string;
  loading: boolean = false
  enter: FormGroup = new FormGroup({
    'password': new FormControl(),
    'tel': new FormControl(),
    'selected': new FormControl()
  })


  load(){
    this.loading=true

    setTimeout(()=>{
      this.loading = false
    }, 2000)
  }
  submit(){
    console.log(this.enter.value);
    
  }
  
}
