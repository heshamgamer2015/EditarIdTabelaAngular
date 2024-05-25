import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss'],
})
export class ListaPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [
    { id: 1, nome: 'João', idade: 25 },
    { id: 2, nome: 'Maria', idade: 35 },
    { id: 3, nome: 'Pedro', idade: 4 },
    { id: 4, nome: 'Ana', idade: 2 },
    { id: 5, nome: 'Lucas', idade: 22 },
    { id: 6, nome: 'Carla', idade: 5 },
    { id: 7, nome: 'José', idade: 4 },
    { id: 8, nome: 'Mariana', idade: 29 },
    { id: 9, nome: 'Ricardo', idade: 3 },
    { id: 10, nome: 'Laura', idade: 21 }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pessoas = this.pessoas.filter((pessoa) => pessoa.idade < 30);
  }

  editarPessoa(id: number): void {
    this.router.navigate(['/admin/pessoas/editar', id]);
  }
}
