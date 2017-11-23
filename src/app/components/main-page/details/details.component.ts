import { Component, OnInit } from '@angular/core';
import {ListItem} from '../../../model/ListItem';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public listItem: ListItem;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.listItem = this.dataService.listItem;
  }

}
