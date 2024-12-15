import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PrimaryMenuComponent } from './menu/primary-menu/primary-menu.component';
import { FilterMenuComponent } from './menu/filter-menu/filter-menu.component';
import { InfoproductsComponent } from './inforproducts/infoproducts/infoproducts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PrimaryMenuComponent,FilterMenuComponent, InfoproductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gloxi.front';
}
