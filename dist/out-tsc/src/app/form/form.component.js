import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Quote } from '../quote';
var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.newQuote = new Quote("", new Date());
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map