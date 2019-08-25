import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalProfissionalPage } from './modal-profissional.page';
var routes = [
    {
        path: '',
        component: ModalProfissionalPage
    }
];
var ModalProfissionalPageModule = /** @class */ (function () {
    function ModalProfissionalPageModule() {
    }
    ModalProfissionalPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ReactiveFormsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalProfissionalPage]
        })
    ], ModalProfissionalPageModule);
    return ModalProfissionalPageModule;
}());
export { ModalProfissionalPageModule };
//# sourceMappingURL=modal-profissional.module.js.map