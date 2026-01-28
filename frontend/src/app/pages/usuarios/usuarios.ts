import { Component } from '@angular/core';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {

  public users: any[] = [];

  constructor(private api: Api) { }

  ngOnInit(): void {
    this.api.getUsers().subscribe({
      next: data => {
        this.users = data;
      }
    });
  }

}
