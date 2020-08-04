"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const node_fetch_1 = __importDefault(require("node-fetch"));
const promise_fn_retry_1 = __importDefault(require("promise-fn-retry"));
const index_1 = __importDefault(require("./config/index"));
class Blaseball {
    constructor() {
        this.retryOptions = { times: 3, initialDelay: 1000 };
        this.doRetry = (url) => promise_fn_retry_1.default(() => node_fetch_1.default(url), this.retryOptions);
        this.extractRes = (res) => res;
    }
    getAllTeams() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doRetry(index_1.default.ALL_TEAMS).then(this.extractRes);
        });
    }
    getDivisions(...id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ id });
            const url = `${index_1.default.DIVISIONS}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getAllDivisions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doRetry(index_1.default.ALL_DIVISIONS).then(this.extractRes);
        });
    }
    getGlobalEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doRetry(index_1.default.GLOBAL_EVENTS).then(this.extractRes);
        });
    }
    getLeagues(...id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ id });
            const url = `${index_1.default.LEAGUES}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getSubLeagues(...id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ id });
            const url = `${index_1.default.SUB_LEAGUES}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getGames(...id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ id });
            const url = `${index_1.default.GAMES}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getOffseasonSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doRetry(index_1.default.OFFSEASON_SETUP).then(this.extractRes);
        });
    }
    getOffseasonRecap(season) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ season: season.toString() });
            const url = `${index_1.default.OFFSEASON_RECAP}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getOffseasonBonusResults(...ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ ids });
            const url = `${index_1.default.OFFSEASON_BONUS_RESULTS}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getOffseasonDecreeResults(...ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ ids });
            const url = `${index_1.default.OFFSEASON_DECREE_RESULTS}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getPlayoffDetails(playoffNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ number: playoffNumber.toString() });
            const url = `${index_1.default.PLAYOFF_DETAILS}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getTeams(...id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ id });
            const url = `${index_1.default.TEAMS}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getPlayers(...id) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ id });
            const url = `${index_1.default.PLAYERS}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getSeason(seasonNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = new url_1.URLSearchParams({ number: seasonNumber.toString() });
            const url = `${index_1.default.SEASON}?${params}`;
            return this.doRetry(url).then(this.extractRes);
        });
    }
    getSimulationData() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.doRetry(index_1.default.SIM_DATA).then(this.extractRes);
        });
    }
}
exports.default = new Blaseball();
module.exports = new Blaseball();
