import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuterizationComponent } from '../modal/auterization/auterization.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.scss'],
  providers: [DialogService]
})
export class HederComponent {

  autoriz: boolean = false

  ref: DynamicDialogRef

  constructor(public dialogService: DialogService, private _router: Router) { }

  show() {
    this.ref = this.dialogService.open(AuterizationComponent, { header: 'Авторизация' })
  }
  check() {
    if (this.autoriz == true) {
      this._router.navigate(['create'])
    } else {
      this.show()
    }
  }
}


ref: DynamicDialogRef;


