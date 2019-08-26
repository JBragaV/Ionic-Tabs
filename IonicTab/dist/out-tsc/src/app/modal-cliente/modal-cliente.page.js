import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
var ModalClientePage = /** @class */ (function () {
    function ModalClientePage(formBilder, clienteService, arota, nav) {
        this.formBilder = formBilder;
        this.clienteService = clienteService;
        this.arota = arota;
        this.nav = nav;
    }
    ModalClientePage.prototype.ngOnInit = function () {
    };
    ModalClientePage.prototype.goBack = function () {
        this.nav.navigateBack("/tabs/tab4");
    };
    ModalClientePage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-cliente',
            templateUrl: './modal-cliente.page.html',
            styleUrls: ['./modal-cliente.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ClienteService,
            Router,
            NavController])
    ], ModalClientePage);
    return ModalClientePage;
}());
export { ModalClientePage };
//# sourceMappingURL=modal-cliente.page.js.map