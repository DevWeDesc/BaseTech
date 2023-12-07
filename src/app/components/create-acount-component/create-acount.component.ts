import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-acount',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './create-acount.component.html',
  styleUrl: './create-acount.component.scss',
})
export class CreateAcountComponent {}
