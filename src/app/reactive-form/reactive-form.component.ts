import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      userName:new FormControl('',[Validators.required,Validators.minLength(8)]),
      phone:new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
  }

  methodForValidate(){

  }

  registerSender() {

  }
}
