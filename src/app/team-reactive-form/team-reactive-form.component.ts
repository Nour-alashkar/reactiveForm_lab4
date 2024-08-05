import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-team-reactive-form',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink,RouterLinkActive],
  templateUrl: './team-reactive-form.component.html',
  styleUrl: './team-reactive-form.component.css'
})
export class TeamReactiveFormComponent {
  inputValue: string = "";
 
  sendfakeData(loginForm: any) {
    console.log("tmam");
  }
}
