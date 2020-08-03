import { URLSearchParams } from "url";
import fetch, { Response } from "node-fetch";
import endpoints from "./config";

class Api {
  getAllTeams() {
    return fetch(endpoints.ALL_TEAMS).then((res: Response) => res.json());
  }

  getAllDivisions() {
    return fetch(endpoints.ALL_DIVS).then((res: Response) => res.json());
  }

  getGlobalEvents() {
    return fetch(endpoints.GLOBAL_EVENTS).then((res: Response) => res.json());
  }

  getLeague(id: string) {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.LEAGUE}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getSubLeague(...id: string[]) {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.SUB_LEAGUE}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getGame(id: string) {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.GAME}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getOffseasonSetup() {
    return fetch(endpoints.OFFSEASON_SETUP).then((res: Response) => res.json());
  }

  getOffseasonRecap(season: number) {
    const params = new URLSearchParams({ season: season.toString() });
    const url = `${endpoints.OFFSEASON_RECAP}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getOffseasonBonusResults(...ids: string[]) {
    const params = new URLSearchParams({ ids });
    const url = `${endpoints.OFFSEASON_BONUS_RESULTS}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getOffseasonDecreeResults(...ids: string[]) {
    const params = new URLSearchParams({ ids });
    const url = `${endpoints.OFFSEASON_DECREE_RESULTS}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getPlayoffDetails(playoffNumber: number) {
    const params = new URLSearchParams({ number: playoffNumber.toString() });
    const url = `${endpoints.PLAYOFF_DETAILS}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getTeam(...id: string[]) {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.TEAM}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getPlayers(...id: string[]) {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.PLAYERS}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getSeason(seasonNumber: number) {
    const params = new URLSearchParams({ number: seasonNumber.toString() });
    const url = `${endpoints.SEASON}?${params}`;
    return fetch(url).then((res: Response) => res.json());
  }

  getSimulationData() {
    return fetch(endpoints.SIM_DATA).then((res: Response) => res.json());
  }
}

const api = new Api();

export default api;
exports = api;
module.exports = api;
