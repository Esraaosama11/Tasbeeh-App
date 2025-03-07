import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasbeehComponent } from './tasbeeh/tasbeeh.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasbeehComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Tasbeeh-app';
}
