import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicosPage } from './servicos.page';
var routes = [
    {
        path: '',
        component: ServicosPage
    }
];
var ServicosPageModule = /** @class */ (function () {
    function ServicosPageModule() {
    }
    ServicosPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicosPage]
        })
    ], ServicosPageModule);
    return ServicosPageModule;
}());
export { ServicosPageModule };
//# sourceMappingURL=servicos.module.js.map