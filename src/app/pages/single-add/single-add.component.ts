import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICard } from 'src/app/interface/icard';
import { MockService } from 'src/app/service/mock.service';


@Component({
  selector: 'app-single-add',
  templateUrl: './single-add.component.html',
  styleUrls: ['./single-add.component.scss']
})
export class SingleAddComponent implements OnInit {

  @Input() data: ICard

  visible: boolean

  constructor(private _mockService: MockService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this._activatedRoute.snapshot.params['id'];
    this.data = this._mockService.getItem(id)
  }

  showDialog() {
    this.visible = true
  }
}
