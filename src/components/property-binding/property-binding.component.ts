import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
  src ="https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png"
  bool= 'true';
  // Component
  isActive="true";
  textColor = 'blue';
  onClick(){
    alert('Button clicked');
  }
  username: string='';
  

}
