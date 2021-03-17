import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import CampaignNameViewModel from '../campaigns/campaign-name.view-model';
import CampaignViewModel from '../campaigns/campaign.view-model';
import { PlaylistModel } from './models/playlist.model';

@Injectable({ providedIn: 'root' })
export class APIService {

  constructor(private readonly httpClient: HttpClient) { }

  public getAudioStreamUrl(id: string): string {
    return `${environment.api}/streams/${id}`;
  }

  public getPlaylists(): Promise<Array<PlaylistModel>> {
    return this.httpClient.get<Array<PlaylistModel>>(
      `${environment.api}/playlists/`, { responseType: 'json' }
    ).toPromise();
  }

  public getSongs(): Promise<Array<any>> {
    return this.httpClient.get<Array<any>>(
      `${environment.api}/songs`, { responseType: 'json' }
    ).toPromise();
  }

  public getCampaign(id: string): Promise<CampaignViewModel> {
    return this.httpClient.get<CampaignViewModel>(
      `${environment.api}/campaigns/get-single/${id}`, { responseType: 'json' }
    ).toPromise();
  }

  public getCampaigns(): Promise<Array<CampaignViewModel>> {
    return this.httpClient.get<Array<CampaignViewModel>>(
      `${environment.api}/campaigns`, { responseType: 'json' }
    ).toPromise();
  }

  public getCampaignNames(): Promise<Array<CampaignNameViewModel>> {
    return this.httpClient.get<Array<CampaignNameViewModel>>(
      `${environment.api}/campaigns/get-names`, { responseType: 'json' }
    ).toPromise();
  }

  public getFilters(): Promise<Array<any>> {
    return this.httpClient.get<Array<any>>(
      `${environment.api}/filters`, { responseType: 'json' }
    ).toPromise();
  }
}
