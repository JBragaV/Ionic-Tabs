import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },
  { path: 'modal-profissional', loadChildren: './modal-profissional/modal-profissional.module#ModalProfissionalPageModule' },
  { path: 'modal-cliente', loadChildren: './modal-cliente/modal-cliente.module#ModalClientePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
