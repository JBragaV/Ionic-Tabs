import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfissionalService } from '../service/profissional.service';
import { Router } from '@angular/router';
var FormPage = /** @class */ (function () {
    function FormPage(alertController, formBilder, profissionalService, arota) {
        this.alertController = alertController;
        this.formBilder = formBilder;
        this.profissionalService = profissionalService;
        this.arota = arota;
        //Variável de teste.
        this.msgNome = "";
        this.msgEmail = "";
        this.msgEndereco = "";
        this.msgPass = "";
        this.msgServicos = "";
        this.errorNome = false;
        this.errorEmail = false;
        this.errorEndereco = false;
        this.errorPass = false;
        this.erroServicos = false;
    }
    FormPage.prototype.ngOnInit = function () {
        this.novoProfissional = false;
        this.proForm = this.formBilder.group({
            nome: ["", [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
            email: ["", [Validators.required, Validators.email, Validators.maxLength(40)]],
            endereco: ["", [Validators.required, Validators.maxLength(100)]],
            password: ["", Validators.compose([
                    Validators.minLength(4),
                    Validators.maxLength(20),
                    Validators.required
                ])]
            //servicos:["", Validators.required]
        });
        this.pegarTodos();
    };
    FormPage.prototype.pegarTodos = function () {
        var _this = this;
        this.profissionalService.getAllProf().subscribe(function (profDB) { return _this.profissionais = profDB; }, function (Erro) { return console.log(Erro); });
    };
    FormPage.prototype.deletar = function (id) {
        var _this = this;
        this.profissionalService.delete(id).subscribe(function () {
            _this.arota.navigateByUrl("tabs/form"),
                function (error) {
                    console.log(error);
                };
        });
        window.location.reload();
    };
    FormPage.prototype.logar = function () {
        var _a = this.proForm.controls, nome = _a.nome, email = _a.email, endereco = _a.endereco, password = _a.password;
        if (!this.proForm.valid) {
            alert("Deu pane em algum lugar aí");
            if (!nome.valid) {
                this.errorNome = true;
                this.msgNome = "Insira um nome no campo acima!";
            }
            else {
                this.msgNome = "";
            }
            if (!email.valid) {
                this.errorEmail = true;
                this.msgEmail = "Insira um e-mail válido no campo acima!";
            }
            else {
                this.msgEmail = "";
            }
            if (!endereco.valid) {
                this.errorEndereco = true;
                this.msgEndereco = "Insira um endereço no campo acima!";
            }
            else {
                this.msgEndereco = "";
            }
            if (!password.valid) {
                this.errorPass = true;
                this.msgPass = "Insira uma senha entre 4 e 20 caracteres!";
            }
            else {
                this.errorPass = false;
                this.msgPass = "";
            }
            /*if(!Servicos.valid){
              this.erroServicos = true;
              this.msgServicos = "Selecione pelo menos um serviço!!!"
            }else{
              this.erroServicos = false;
              this.msgServicos = "";
            }*/
        }
        else {
            this.add();
        }
    };
    FormPage.prototype.add = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var novoProfissional;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                novoProfissional = this.proForm.getRawValue();
                console.log(novoProfissional);
                this.profissionalService.AddProf(novoProfissional).subscribe(function () {
                    return window.location.reload();
                }, function (error) {
                    console.log(error),
                        _this.proForm.reset();
                });
                return [2 /*return*/];
            });
        });
    };
    FormPage.prototype.goForward = function () {
        if (this.novoProfissional == false) {
            this.novoProfissional = true;
        }
        else {
            this.novoProfissional = false;
        }
    };
    FormPage.prototype.atualizar = function () {
        this.arota.navigateByUrl("/tabs/modal-profissional");
    };
    FormPage = tslib_1.__decorate([
        Component({
            selector: 'app-form',
            templateUrl: './form.page.html',
            styleUrls: ['./form.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController,
            FormBuilder,
            ProfissionalService,
            Router])
    ], FormPage);
    return FormPage;
}());
export { FormPage };
//# sourceMappingURL=form.page.js.map