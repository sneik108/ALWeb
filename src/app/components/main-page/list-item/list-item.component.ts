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

  getDataPreview(body: any) {
    // for sanitizing data
    const div = document.createElement('div');
    div.innerHTML = body;
    return div.textContent.substring(0, 200);
  }

  goToDetails() {
    const listItem: ListItem = {body: this.body, title: this.title};
    this.dataService.listItem = listItem;
    this.router.navigateByUrl('/details');
  }

}
