import { Component } from '@angular/core';
import { InfoproductsComponent } from "../../inforproducts/infoproducts/infoproducts.component";

@Component({
  selector: 'app-init',
  standalone: true,
  imports: [InfoproductsComponent],
  templateUrl: './init.component.html',
  styleUrl: './init.component.css'
})
export default class InitComponent {

}
