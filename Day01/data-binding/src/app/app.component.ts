import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';

  pageTitle = 'Angular Data Binding Practice';
  a = 15;
  b = 7;
  sum = this.a+this.b;

  imageUrl = "https://cdn.pixabay.com/photo/2024/02/23/22/19/forest-8592899_960_720.jpg";
  disable = false;
  toggleChange() {
    this.disable = !this.disable;
    console.log(this.disable);
  }

  handleButtonClick() {
    console.log('Click Me button is clicked!');
  }

  username = '';
  onChange(event: any) {
    console.log(event.target.value);
    this.username = event.target.value;
  }

  isError = true;
}
