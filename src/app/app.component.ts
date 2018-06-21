import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  createdItem = new Date();
  items = [
    {
      name: 'Potion',
      content: 'A potion which restores 50 HP',
      price: '25$',
      in_stock: 5,
      created_at: this.createdItem
    },
    {
      name: 'Elixir',
      content: 'An elixir which restores 25 MP',
      price: '50$',
      in_stock: 3,
      created_at: new Date()
    },
    {
      name: 'Antidote',
      content: 'An antidote which cures the poison',
      price: '75$',
      in_stock: 0,
      created_at: new Date()
    },
    {
      name: 'Sword',
      content: 'A great weapon to kick some asss',
      price: '150$',
      in_stock: 1,
      created_at: new Date()
    },
    {
      name: 'Developer Plush',
      content: 'It\'s awesome, It\'s wonderfull, It\'s FREE !!!!',
      price: 'FREE',
      in_stock: 0,
      created_at: new Date()
    },
    {
      name: 'Old Woman',
      content: 'She is back ! Take care of the explosion ...',
      price: '2000$',
      in_stock: 0,
      created_at: new Date()
    }
  ]
}
