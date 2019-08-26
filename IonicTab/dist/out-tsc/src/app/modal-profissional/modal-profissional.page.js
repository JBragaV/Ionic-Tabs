import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProfissionalService } from '../service/profissional.service';
var ModalProfissionalPage = /** @class */ (function () {
    function ModalProfissionalPage(formBilder, profissionalService) {
        this.formBilder = formBilder;
        this.profissionalService = profissionalService;
        this.id = "1";
    }
    ModalProfissionalPage.prototype.pegaProfissional = function (id) {
        return this.profissionalService.getProfissional(id);
    };
    ModalProfissionalPage.prototype.ngOnInit = function () {
        this.pegaProfissional(this.id);
        console.log(this.profissional);
        var nome = "Jocimar";
        this.proForm = this.formBilder.group({
            nome: ["" + nome, [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
            email: ["" + nome, [Validators.required, Validators.email, Validators.maxLength(40)]],
            endereco: ["" + nome, [Validators.required, Validators.maxLength(100)]],
            password: ["" + nome, Validators.compose([
                    Validators.minLength(4),
                    Validators.maxLength(20),
                    Validators.required
                ])]
            //servicos:["", Validators.required]
        });
    };
    ModalProfissionalPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-profissional',
            templateUrl: './modal-profissional.page.html',
            styleUrls: ['./modal-profissional.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, ProfissionalService])
    ], ModalProfissionalPage);
    return ModalProfissionalPage;
}());
export { ModalProfissionalPage };
//# sourceMappingURL=modal-profissional.page.js.map