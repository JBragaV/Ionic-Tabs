import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
var routes = [
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
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forChild(routes)
            ],
            exports: [RouterModule]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());
export { TabsPageRoutingModule };
//# sourceMappingURL=tabs.router.module.js.map