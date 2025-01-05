import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {

  @Output() closeLogin = new EventEmitter<void>();

  onCloseLogin() {
    this.closeLogin.emit();
  }


}
