import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import CampaignViewModel from '../../campaigns/campaign.view-model';
import DroplistItem from '../droplist-item.interface';
import Droplist from '../droplist.interface';
import { DroplistService } from '../droplist.service';

@Component({
  selector: 'app-droplist-container',
  templateUrl: 'droplist-container.component.html',
  styleUrls: ['droplist-container.component.less']
})

export class DroplistContainerComponent {
  public currentCampaign?: CampaignViewModel;
  public loading = false;

  constructor(private readonly droplistService: DroplistService) { }

  public getActiveDroplists(): Array<Droplist> {
    return this.droplistService.getActiveDroplists();
  }

  public getInactiveDroplist(): Array<DroplistItem> {
    return this.droplistService.getInactiveDroplist();
  }

  public onAdd(): void {
    this.droplistService.addDroplist('New Dock');
  }

  public drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  public onCampaignSelected(campaign: CampaignViewModel): void {
    this.currentCampaign = campaign;
    this.droplistService.switchCampaign(this.currentCampaign);
  }

  public onCampaignLoading(loading: boolean): void {
    this.loading = loading;
  }
}
