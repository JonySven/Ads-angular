import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuterizationComponent } from '../modal/auterization/auterization.component';
import { DialogModule } from 'primeng/dialog';



@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss'],
  providers: [DialogService]
})
export class HederComponent {

  ref: DynamicDialogRef

  constructor(public dialogService: DialogService) {}

  show(){
    this.ref = this.dialogService.open(AuterizationComponent, {header: 'Авторизация'})
  }

}


ref: DynamicDialogRef;


