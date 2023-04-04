import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface ICategories {
  name: string
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [MessageService]
})
export class CreateComponent implements OnInit{

  constructor(private _massegeservice: MessageService){}

  categories: ICategories[]
  size: number = 1000000

  newAd : FormGroup = new FormGroup({
    'categories': new FormControl(),
    'title': new FormControl(),
    'description': new FormControl(),
    'address': new FormControl(),
    'price': new FormControl(),
  });

  ngOnInit() {
    this.categories = [
      {name: 'Штаны'},
      {name: 'Автотовары'}
    ]
  }
  submit(){
    console.log(this.newAd.value);
    
  }

  onUpload(event: any){
    this._massegeservice.add({severity: 'info', summary: 'Success', detail: 'file Uploaded'});
  }



}
