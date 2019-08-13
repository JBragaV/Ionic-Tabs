import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },  { path: 'secao2', loadChildren: './secao2/secao2.module#Secao2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'secao3', loadChildren: './secao3/secao3.module#Secao3PageModule' },





];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
