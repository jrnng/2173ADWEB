import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

// JAIRA NUNAG - WD302

export class AppComponent {
  name = "";
  title = 'data-binding';

  public image = "/assets/img/pic.jpg" // interpolation image - this is the location where I interpolated the background
  // image of my home page.

  changeName(e:any){

    this.name = e.target.value // event binding - this is where the input text box located, after you insert your email, it will display 
    // the email that you insterted. 

  }
}
