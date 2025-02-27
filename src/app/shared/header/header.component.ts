import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GloxiComponent } from './gloxi/gloxi.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [GloxiComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  @Output() loginClicked = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.getCurrentUser().subscribe(user => {
      this.isLoggedIn = !!user; 
    });
  }

  onLoginClick() {
    this.loginClicked.emit();
  }

}
