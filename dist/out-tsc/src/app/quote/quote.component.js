import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.UpvoteResult = 0;
        this.DownvoteResult = 0;
    }
    // upvote(){
    //  return UpvoteResult=UpvoteResult+1;
    // }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-quote',
            templateUrl: './quote.component.html',
            styleUrls: ['./quote.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());
export { QuoteComponent };
//# sourceMappingURL=quote.component.js.map