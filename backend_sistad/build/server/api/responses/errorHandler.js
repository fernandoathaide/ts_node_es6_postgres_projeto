"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var HTTPStatus = __importStar(require("http-status"));
function onError(res, msn, error) {
    console.log("Error Interno do Server: " + error);
    res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(msn);
}
exports.onError = onError;
