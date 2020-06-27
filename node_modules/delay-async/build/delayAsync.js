"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delayAsync(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
exports.default = delayAsync;
//# sourceMappingURL=delayAsync.js.map