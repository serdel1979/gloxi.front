import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimaryMenuComponent } from './menu/primary-menu/primary-menu.component';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { InfoproductsComponent } from './inforproducts/infoproducts/infoproducts.component';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    PrimaryMenuComponent,
    FilterMenuComponent, 
    InfoproductsComponent
 ],
  providers:[AuthService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'gloxi.front';

  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.authService.getCurrentUser().subscribe(user => {
      this.isLoggedIn = !!user; 
    });
  }



}
