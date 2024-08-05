import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TeamReactiveFormComponent } from '../team-reactive-form/team-reactive-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { routes } from '../app.routes';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
value = '';
}
