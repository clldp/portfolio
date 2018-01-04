import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Reach Prestige 3", "Make Dinner", "Complete Chores"];
  newItem = "a";
  pushItem =function() {
    if(this.newItem != "") {
        this.items.push(this.newItem);
        this.newItem="";
    }
  }
  deleteItem = function(index) {
    this.items.splice(index,1);
  }
}
