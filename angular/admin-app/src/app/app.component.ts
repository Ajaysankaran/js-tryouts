import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-app';

  firstname = signal<string>('')

  onNameEntered(event: any) {
    this.firstname.set(event.target.value)
  }
}
