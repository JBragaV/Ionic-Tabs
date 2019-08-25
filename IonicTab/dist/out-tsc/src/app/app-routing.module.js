import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
    { path: 'form', loadChildren: './form/form.module#FormPageModule' },
    { path: 'servicos', loadChildren: './servicos/servicos.module#ServicosPageModule' },
    { path: 'modal-profissional', loadChildren: './modal-profissional/modal-profissional.module#ModalProfissionalPageModule' },
    { path: 'modal-cliente', loadChildren: './modal-cliente/modal-cliente.module#ModalClientePageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map