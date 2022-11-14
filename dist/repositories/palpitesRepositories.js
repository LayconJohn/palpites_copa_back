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
import { connection } from "../database/postgres.js";
function verificarJogo(gameId) {
    return __awaiter(this, void 0, void 0, function () {
        var jogo, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query('SELECT * FROM games WHERE id = $1', [gameId])];
                case 1:
                    jogo = (_a.sent()).rows[0];
                    return [2 /*return*/, jogo];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function inserirResultado(homeGuess, visitorGuess, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query('INSERT INTO results ("homeGuess", "visitorGuess", "userId") VALUES ($1, $2, $3)', [homeGuess, visitorGuess, userId])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function inserirPalpite(userId, gameId, resultId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query('INSERT INTO "usersGuess" ("userId", "gameId", "resultId") VALUES ($1, $2, $3)', [userId, gameId, resultId])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function pegarPalpites(gameId) {
    return __awaiter(this, void 0, void 0, function () {
        var palpites, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query("\n        SELECT\n                users.username as username,\n                \"usersGuess\".id as id,\n                results.\"homeGuess\" as \"homeGuess\",\n                results.\"visitorGuess\" as \"visitorGuess\",\n                games.\"homePlayer\" as \"homePlayer\",\n                games.\"visitorPlayer\" as \"visitorPlayer\"\n            FROM \"usersGuess\"\n            JOIN games ON games.id = \"usersGuess\".\"gameId\"\n            JOIN results ON results.id = \"usersGuess\".\"resultId\"\n            JOIN users ON users.id = \"usersGuess\".\"userId\"\n            WHERE games.id = $1\n        ;", [gameId])];
                case 1:
                    palpites = (_a.sent()).rows;
                    return [2 /*return*/, palpites];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function deletarPalpiteResultado(guessId) {
    return __awaiter(this, void 0, void 0, function () {
        var guess, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, connection.query('SELECT * FROM "usersGuess" WHERE id = $1;', [guessId])];
                case 1:
                    guess = (_a.sent()).rows[0];
                    return [4 /*yield*/, connection.query('DELETE FROM "usersGuess" WHERE id = $1', [guessId])];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, connection.query('DELETE FROM results WHERE id = $1', [guess.resultId])];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [2 /*return*/];
                case 5: return [2 /*return*/];
            }
        });
    });
}
;
function verificarPalpite(guessId) {
    return __awaiter(this, void 0, void 0, function () {
        var guess, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, connection.query('SELECT * FROM "usersGuess" WHERE id = $1;', [guessId])];
                case 1:
                    guess = (_a.sent()).rows[0];
                    return [2 /*return*/, guess];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [2 /*return*/];
                case 3: return [2 /*return*/];
            }
        });
    });
}
;
function atulizarDadosPalpite(guessId, homeGuess, visitorGuess) {
    return __awaiter(this, void 0, void 0, function () {
        var guess, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, connection.query('SELECT * FROM "usersGuess" WHERE id = $1;', [guessId])];
                case 1:
                    guess = (_a.sent()).rows[0];
                    return [4 /*yield*/, connection.query('UPDATE results SET "homeGuess" = $1, "visitorGuess" = $2 WHERE id = $3;', [homeGuess, visitorGuess, guess.resultId])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
                case 3:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [2 /*return*/];
                case 4: return [2 /*return*/];
            }
        });
    });
}
export { verificarJogo, inserirResultado, inserirPalpite, pegarPalpites, deletarPalpiteResultado, verificarPalpite, atulizarDadosPalpite };
