import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
//realizar a conexao com o servidor carregando o driver do banco
var API_URL = 'http://localhost:3000';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
    }
    //crud
    //inserir dados do cliente
    ClienteService.prototype.addCliente = function (cliente) {
        return this.http.post(API_URL + "/cliente", cliente, httpOptions);
    };
    //pesquisar 1 cliente pelo email
    ClienteService.prototype.getCliente = function (email) {
        return this.http.get(API_URL + "/cliente?emailCliente=" + email, httpOptions);
    };
    //Pegar todos os clientes do banco de dados
    ClienteService.prototype.getAllCliente = function () {
        return this.http.get(API_URL + "/cliente", httpOptions);
    };
    //Atualizar os dados do Cliente
    ClienteService.prototype.updateCliente = function (cliente) {
        return this.http.post(API_URL + "/cliente", cliente, httpOptions);
    };
    //Apagar registro
    ClienteService.prototype.deletarCliente = function (email) {
        return this.http.delete(API_URL + "/cliente/" + email, httpOptions);
    };
    ClienteService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
        // configurar manipulação de dados recebidos do formilario
        ,
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ClienteService);
    return ClienteService;
}());
export { ClienteService };
//# sourceMappingURL=cliente.service.js.map