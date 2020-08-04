import { URLSearchParams } from 'url';
import fetch, { Response } from 'node-fetch';
import retry from 'promise-fn-retry';
import endpoints from './config/index';

class Blaseball {
  private retryOptions = { times: 3, initialDelay: 1000 };

  private doRetry = (url: string) => retry(() => fetch(url), this.retryOptions);

  private extractRes = (res: Response) => res;

  async getAllTeams(): Promise<Response> {
    return this.doRetry(endpoints.ALL_TEAMS).then(this.extractRes);
  }

  async getDivisions(...id: string[]): Promise<Response> {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.DIVISIONS}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getAllDivisions(): Promise<Response> {
    return this.doRetry(endpoints.ALL_DIVISIONS).then(this.extractRes);
  }

  async getGlobalEvents(): Promise<Response> {
    return this.doRetry(endpoints.GLOBAL_EVENTS).then(this.extractRes);
  }

  async getLeagues(...id: string[]): Promise<Response> {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.LEAGUES}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getSubLeagues(...id: string[]): Promise<Response> {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.SUB_LEAGUES}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getGames(...id: string[]): Promise<Response> {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.GAMES}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getOffseasonSetup(): Promise<Response> {
    return this.doRetry(endpoints.OFFSEASON_SETUP).then(this.extractRes);
  }

  async getOffseasonRecap(season: number): Promise<Response> {
    const params = new URLSearchParams({ season: season.toString() });
    const url = `${endpoints.OFFSEASON_RECAP}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getOffseasonBonusResults(...ids: string[]): Promise<Response> {
    const params = new URLSearchParams({ ids });
    const url = `${endpoints.OFFSEASON_BONUS_RESULTS}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getOffseasonDecreeResults(...ids: string[]): Promise<Response> {
    const params = new URLSearchParams({ ids });
    const url = `${endpoints.OFFSEASON_DECREE_RESULTS}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getPlayoffDetails(playoffNumber: number): Promise<Response> {
    const params = new URLSearchParams({ number: playoffNumber.toString() });
    const url = `${endpoints.PLAYOFF_DETAILS}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getTeams(...id: string[]): Promise<Response> {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.TEAMS}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getPlayers(...id: string[]): Promise<Response> {
    const params = new URLSearchParams({ id });
    const url = `${endpoints.PLAYERS}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getSeason(seasonNumber: number): Promise<Response> {
    const params = new URLSearchParams({ number: seasonNumber.toString() });
    const url = `${endpoints.SEASON}?${params}`;
    return this.doRetry(url).then(this.extractRes);
  }

  async getSimulationData(): Promise<Response> {
    return this.doRetry(endpoints.SIM_DATA).then(this.extractRes);
  }
}

export default new Blaseball();
module.exports = new Blaseball();
