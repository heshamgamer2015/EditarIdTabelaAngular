import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  pessoaId: number | null = null;
  pessoa: Pessoa | undefined;
  novaIdade: number | null = null;

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        const id = +idParam;
        this.pessoaId = id;
        this.pessoa = this.pessoas.find(p => p.id === id);
      } else {
        console.error("ID da pessoa não encontrado.");
      }
    });
  }

  salvar(): void {
    if (this.pessoa && this.novaIdade !== null) {
      this.pessoa.idade = this.novaIdade;
      this.router.navigate(['/pessoas']);
    }
  }
}
