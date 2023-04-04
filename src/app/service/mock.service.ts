import { Injectable } from '@angular/core';
import { ICard } from '../interface/icard';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  private mock: ICard[] = new Array(20).fill(0).map((x, i) => ({
    id: i + 1,
    title: 'Гитара фендер #' + i,
    price: 22000 * i,
    imgSrc: 'https://placehold.co/600x400',
    createdAt: 'Сегодня 14:15',
    address: 'Москва',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, doloremque.'
  }))

  getList(): ICard[] {
    return this.mock;
  }
  getItem(id: number): ICard {
    return this.mock.find(i => i.id === id)
  }
}
