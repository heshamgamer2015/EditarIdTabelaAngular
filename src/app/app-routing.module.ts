import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      { path: "pessoas", component: ListaPessoasComponent },
      { path: 'admin/pessoas/editar/:id', component: EditarPessoaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
