import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../service/cliente.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
var Tab4Page = /** @class */ (function () {
    function Tab4Page(formBilder, clienteService, nav, arota) {
        this.formBilder = formBilder;
        this.clienteService = clienteService;
        this.nav = nav;
        this.arota = arota;
        this.servicos = ["Manutenção", "Design", "Coração", "Comunista", "Formatação"];
        this.msgNome = "";
        this.msgEmail = "";
        this.msgEndereco = "";
        this.msgPass = "";
        this.msgData = "";
        this.errorNome = false;
        this.errorEmail = false;
        this.errorEndereco = false;
        this.errorPass = false;
        this.errorData = false;
    }
    Tab4Page.prototype.sobe = function () {
        document.querySelector("ion-content").scrollToTop(50);
    };
    Tab4Page.prototype.ngOnInit = function () {
        this.novoCliente = false;
        this.formulario = this.formBilder.group({
            nome: ["", [Validators.required, Validators.maxLength(35), Validators.minLength(2)]],
            email: ["", [Validators.required, Validators.email, Validators.maxLength(40)]],
            endereco: ["", [Validators.required, Validators.maxLength(100)]],
            password: ["", Validators.compose([
                    Validators.minLength(4),
                    Validators.maxLength(20),
                    Validators.required
                ])]
            //data:["", Validators.required]
        });
        this.pegarCliente();
    };
    Tab4Page.prototype.pegarCliente = function () {
        var _this = this;
        this.clienteService.getAllCliente().subscribe(function (clienteDB) { return _this.cliente = clienteDB; }, function (error) { return console.log(error); });
    };
    //"Função que serve para mostrar a tabela de cadastro na tela para o usuário."
    Tab4Page.prototype.goForward = function () {
        if (this.novoCliente == false) {
            this.novoCliente = true;
        }
        else {
            this.novoCliente = false;
        }
    };
    //Deletar o dados selecionado
    Tab4Page.prototype.deletar = function (id) {
        var _this = this;
        this.clienteService.deletarCliente(id).subscribe(function () {
            _this.arota.navigateByUrl("tabs/tab4"),
                function (error) {
                    console.log(error);
                };
        });
        window.location.reload();
    };
    Tab4Page.prototype.add = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var novoCliente;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //enviar para os serviços.
                        /*Resgatando os valores dos campos e fazendo i, cast(conversão)para o modelo)template Cliente*/
                        console.log(this.formulario.value);
                        novoCliente = this.formulario.getRawValue();
                        this.clienteService.addCliente(novoCliente).subscribe(function () { return _this.nav.navigateForward("/tabs/tab1"); }, function (error) { console.log(error); });
                        //await this.formulario.reset();
                        return [4 /*yield*/, window.location.reload()];
                    case 1:
                        //await this.formulario.reset();
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab4Page.prototype.logar = function () {
        var _a = this.formulario.controls, nome = _a.nome, email = _a.email, endereco = _a.endereco, password = _a.password;
        if (!this.formulario.valid) {
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
            /*if(!data.valid){
              this.errorData = true;
              this.msgData = "Insira uma data!"
            }*/
        }
        else {
            this.add();
        }
    };
    Tab4Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab4',
            templateUrl: './tab4.page.html',
            styleUrls: ['./tab4.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            ClienteService,
            NavController,
            Router])
    ], Tab4Page);
    return Tab4Page;
}());
export { Tab4Page };
//# sourceMappingURL=tab4.page.js.map