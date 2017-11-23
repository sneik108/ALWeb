import { Component, OnInit, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';
import {ListItem} from '../../../model/ListItem';
import {DataService} from '../../../services/data.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() title: string;
  @Input() date: string;
  @Input() body: string;

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  getDateFromSecs(secs) {
    const date = new Date(1970, 0, 1);
    date.setSeconds(secs);
    // `${month} ${day}, ${year}`
    return date.toLocaleDateString();
  }

  getDataPreview(body: any) {
    console.log(body);
    return body.substring(0, 200);
  }

  goToDetails() {
    const listItem: ListItem = {body: this.body, title: this.title};
    this.dataService.listItem = listItem;
    console.log(this.dataService.listItem);
    this.router.navigateByUrl('/details');
  }

}
