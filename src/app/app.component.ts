import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TeamReactiveFormComponent } from './team-reactive-form/team-reactive-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HeaderComponent } from './header/header.component';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,RouterLinkActive,RouterLink,TeamReactiveFormComponent,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form';
}
