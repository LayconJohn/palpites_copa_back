var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { inserirResultado, inserirPalpite, pegarPalpites, deletarPalpiteResultado, atulizarDadosPalpite } from "../repositories/palpitesRepositories.js";
function cadastrarResultado(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, homeGuess, visitorGuess, userId, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, homeGuess = _a.homeGuess, visitorGuess = _a.visitorGuess;
                    userId = res.locals.userId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, inserirResultado(homeGuess, visitorGuess, userId)];
                case 2:
                    _b.sent();
                    res.sendStatus(201);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function cadastrarPalpite(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var resultId, gameId, userId, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    resultId = Number(req.params.resultId);
                    gameId = Number(req.params.gameId);
                    userId = res.locals.userId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, inserirPalpite(userId, gameId, resultId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(201)];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function listarPalpites(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var gameId, palpites, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gameId = res.locals.gameId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, pegarPalpites(gameId)];
                case 2:
                    palpites = _a.sent();
                    return [2 /*return*/, res.status(200).send(palpites)];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deletarPalpite(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var guessId, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    guessId = res.locals.guessId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, deletarPalpiteResultado(guessId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(202)];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function atualizarPalpite(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var guessId, _a, homeGuess, visitorGuess, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    guessId = res.locals.guessId;
                    _a = req.body, homeGuess = _a.homeGuess, visitorGuess = _a.visitorGuess;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, atulizarDadosPalpite(guessId, homeGuess, visitorGuess)];
                case 2:
                    _b.sent();
                    return [2 /*return*/, res.sendStatus(204)];
                case 3:
                    error_5 = _b.sent();
                    console.error(error_5);
                    return [2 /*return*/, res.sendStatus(500)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export { cadastrarResultado, cadastrarPalpite, listarPalpites, deletarPalpite, atualizarPalpite };
