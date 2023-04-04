import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/interface/icard';
import { MockService } from 'src/app/service/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  adList: ICard[] = []

  constructor(private _mockService: MockService) { }

  ngOnInit() {
    this.adList = this._mockService.getList()
  }

}
