import { Component, OnInit } from '@angular/core';
import { AlertServicesService } from 'src/app/services/alert-services.service';

@Component({
  selector: 'app-other-items',
  templateUrl: './other-items.component.html',
  styleUrls: ['./other-items.component.css']
})
export class OtherItemsComponent implements OnInit {

  constructor(private alert:AlertServicesService) { }

  ngOnInit() {
  }
  onBuy(){
    this.alert.showError('Dogoggora','Dhiifama Ammaaf Bituu hin dandeessani');
  }

}
