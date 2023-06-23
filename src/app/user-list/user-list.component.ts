import { Component } from '@angular/core';

interface User {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [
    {
      nome: 'João',
      sobrenome: 'Silva',
      email: 'joao@example.com',
      telefone: '1234567890'
    },
    {
      nome: 'Maria',
      sobrenome: 'Souza',
      email: 'maria@example.com',
      telefone: '9876543210'
    },
    // Adicione mais usuários aqui, se necessário
  ];
}



