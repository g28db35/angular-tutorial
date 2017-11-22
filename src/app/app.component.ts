import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  post = {
    title: 'Harry Potter',
    isFavorite: true
  };

  handler(clickState) {
    console.log('the favorate star is ' + clickState);

  }
}
