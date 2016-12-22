import { Component,Output,EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { Tab } from '../../interface/tab';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {

 tabs:Tab[] = [];
  @Output() selected = new EventEmitter();
  
  addTab(tab:Tab) {
    if (!this.tabs.length) {
      tab.selected = true;
    }
    this.tabs.push(tab);
  }
  
  selectTab(tab:Tab,event) {
    event.preventDefault();
    this.tabs.map((tab) => {
      tab.selected = false;
    })
    tab.selected = true;
    this.selected.emit({selectedTab: tab});    
  }

  


 



}
