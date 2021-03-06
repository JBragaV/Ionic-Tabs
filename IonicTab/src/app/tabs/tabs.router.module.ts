import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
      path: 'tab4',
      children: [
        {
          path: '',
          loadChildren: '../tab4/tab4.module#Tab4PageModule'
        }
      ]
    },
      {
      path: 'form',
      children: [
        {
          path: '',
          loadChildren: '../form/form.module#FormPageModule'
        }
      ]
    },
    {
      path: 'servicos',
      children: [
        {
          path: '',
          loadChildren: '../servicos/servicos.module#ServicosPageModule'
        }
      ]
    },
    {
      path: 'modal-cliente',
      children: [
        {
          path: '',
          loadChildren: '../modal-cliente/modal-cliente.module#ModalClientePageModule'
        }
      ]
    },
    {
      path: 'modal-profissional',
      children: [
        {
          path: '',
          loadChildren: '../modal-profissional/modal-profissional.module#ModalProfissionalPageModule'
        }
      ]
    },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
