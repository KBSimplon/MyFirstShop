import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() itemName: string;
  @Input() itemContent: string;
  @Input() itemPrice: string;
  @Input() itemStock: number;
  @Input() itemDate: Date;

  constructor() { }

  ngOnInit() {
  }

  buyItem() {
    this.itemStock--;
    if(this.itemStock === 0) {
      alert("Thank you, this was the last " + this.itemName + " in stock.")
    }
  }

  sellItem() {
    this.itemStock++;
  }

/*   
  getColor() {
    if(this.itemStock === 0) {
      return 'red'; 
    } else {
      return 'lightgreen';
    }
  } 
*/

}
