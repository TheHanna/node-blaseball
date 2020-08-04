"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ALL_TEAMS, ALL_DIVS, GLOBAL_EVENTS, DIVISIONS, LEAGUES, SUB_LEAGUES, GAMES, OFFSEASON_SETUP, OFFSEASON_RECAP, OFFSEASON_BONUS_RESULTS, OFFSEASON_DECREE_RESULTS, PLAYOFF_DETAILS, TEAMS, PLAYERS, SEASONS, SIM_DATA, } = process.env;
const URL = process.env.URL || 'https://blaseball.com/database/';
const buildEndpoint = (defaultValue, providedValue) => `${URL}${providedValue || defaultValue}`;
const endpoints = {
    ALL_TEAMS: buildEndpoint('allTeams', ALL_TEAMS),
    ALL_DIVISIONS: buildEndpoint('allDivisions', ALL_DIVS),
    GLOBAL_EVENTS: buildEndpoint('globalEvents', GLOBAL_EVENTS),
    DIVISIONS: buildEndpoint('division', DIVISIONS),
    LEAGUES: buildEndpoint('league', LEAGUES),
    SUB_LEAGUES: buildEndpoint('subleague', SUB_LEAGUES),
    GAMES: buildEndpoint('game', GAMES),
    OFFSEASON_SETUP: buildEndpoint('offseasonSetup', OFFSEASON_SETUP),
    OFFSEASON_RECAP: buildEndpoint('offseasonRecap', OFFSEASON_RECAP),
    OFFSEASON_BONUS_RESULTS: buildEndpoint('bonusResults', OFFSEASON_BONUS_RESULTS),
    OFFSEASON_DECREE_RESULTS: buildEndpoint('decreeResults', OFFSEASON_DECREE_RESULTS),
    PLAYOFF_DETAILS: buildEndpoint('playoffs', PLAYOFF_DETAILS),
    TEAMS: buildEndpoint('team', TEAMS),
    PLAYERS: buildEndpoint('players', PLAYERS),
    SEASON: buildEndpoint('season', SEASONS),
    SIM_DATA: buildEndpoint('simulationData', SIM_DATA),
};
exports.default = endpoints;
