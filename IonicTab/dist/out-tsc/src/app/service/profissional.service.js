import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var API_URL = 'http://localhost:3000';
var httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};
var ProfissionalService = /** @class */ (function () {
    function ProfissionalService(http) {
        this.http = http;
    }
    //Crud
    ProfissionalService.prototype.AddProf = function (prof) {
        return this.http.post(API_URL + "/profissional", prof, httpOptions);
    };
    ProfissionalService.prototype.getAllProf = function () {
        return this.http.get(API_URL + "/profissional", httpOptions);
    };
    ProfissionalService.prototype.getProfissional = function (email) {
        return this.http.get(API_URL + "/profissional?id=" + email, httpOptions);
    };
    ProfissionalService.prototype.upDateProf = function (prof) {
        return this.http.post(API_URL + "/profissional", prof, httpOptions);
    };
    ProfissionalService.prototype.delete = function (batatafrita) {
        return this.http.delete(API_URL + "/profissional/" + batatafrita, httpOptions);
    };
    ProfissionalService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProfissionalService);
    return ProfissionalService;
}());
export { ProfissionalService };
//# sourceMappingURL=profissional.service.js.map