interface Endpoints {
  ALL_DIVS: string;
  ALL_TEAMS: string;
  GLOBAL_EVENTS: string;
  LEAGUE: string;
  SUB_LEAGUE: string;
  GAME: string;
  OFFSEASON_SETUP: string;
  OFFSEASON_RECAP: string;
  OFFSEASON_BONUS_RESULTS: string;
  OFFSEASON_DECREE_RESULTS: string;
  PLAYOFF_DETAILS: string;
  TEAM: string;
  PLAYERS: string;
  SEASON: string;
  SIM_DATA: string;
}

const {
  ALL_TEAMS,
  ALL_DIVS,
  GLOBAL_EVENTS,
  LEAGUE,
  SUB_LEAGUE,
  GAME,
  OFFSEASON_SETUP,
  OFFSEASON_RECAP,
  OFFSEASON_BONUS_RESULTS,
  OFFSEASON_DECREE_RESULTS,
  PLAYOFF_DETAILS,
  TEAM,
  PLAYERS,
  SEASON,
  SIM_DATA,
} = process.env;

let URL = process.env.URL || "https://blaseball.com/database";

const endpoints: Endpoints = {
  ALL_TEAMS: `${URL}${ALL_TEAMS || "allTeams"}`,
  ALL_DIVS: `${URL}${ALL_DIVS || "allDivisions"}`,
  GLOBAL_EVENTS: `${URL}${GLOBAL_EVENTS || "globalEvents"}`,
  LEAGUE: `${URL}${LEAGUE || "league"}`,
  SUB_LEAGUE: `${URL}${SUB_LEAGUE || "subleague"}`,
  GAME: `${URL}${GAME || "gameById"}`,
  OFFSEASON_SETUP: `${URL}${OFFSEASON_SETUP || "offseasonSetup"}`,
  OFFSEASON_RECAP: `${URL}${OFFSEASON_RECAP || "offseasonRecap"}`,
  OFFSEASON_BONUS_RESULTS: `${URL}${OFFSEASON_BONUS_RESULTS || "bonusResults"}`,
  OFFSEASON_DECREE_RESULTS: `${URL}${
    OFFSEASON_DECREE_RESULTS || "decreeResults"
  }`,
  PLAYOFF_DETAILS: `${URL}${PLAYOFF_DETAILS || "playoffs"}`,
  TEAM: `${URL}${TEAM || "team"}`,
  PLAYERS: `${URL}${PLAYERS || "players"}`,
  SEASON: `${URL}${SEASON || "season"}`,
  SIM_DATA: `${URL}${SIM_DATA || "simulationData"}`,
};

export default endpoints;
