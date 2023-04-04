import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [MessageService]
})


export class FilterComponent implements OnInit {

  items!: MenuItem[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Транспорт',
            routerLink: ''
          },
          {
            label: 'Недвижимость',
          }
        ]
      }
    ];
  }
}
