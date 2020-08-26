import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app';
  votes = new Array(4).fill(0);

  updateVote(index) {
    this.votes[index] += 1;
  }
}
