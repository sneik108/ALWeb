import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {ListItem} from '../../model/ListItem';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  private apiUrl = 'https://cors-anywhere.herokuapp.com/http://qc1-qc1test.azurewebsites.net/ecg/CatalogsApi/GetCatalogItems';
  private data: any[] = [];

  private positionToRead = 0;
  numberToLoad: 20;
  dataForShow: any = [];


  constructor(private http: Http) {
    this.getListItems();
    this.getData();
  }

  ngOnInit() {

  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res: Response) => res.json());
  }

  getListItems() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      this.loadChunkData();
    });
  }

  loadChunkData() {
    console.log(1);
    const vm = this;
    vm.dataForShow.push(vm.data.slice(vm.positionToRead, vm.numberToLoad));
  }

  onScroll() {
    alert('hi');
  }
}
