import { Component, OnInit } from '@angular/core';
import { AlertServicesService } from 'src/app/services/alert-services.service';

@Component({
  selector: 'app-uffata-aadaa',
  templateUrl: './uffata-aadaa.component.html',
  styleUrls: ['./uffata-aadaa.component.css']
})
export class UffataAadaaComponent implements OnInit {
  constructor(private alert: AlertServicesService) { }

  ngOnInit() {
  }
  onBuy(){
    this.alert.showError('Dogoggora','Dhiifama Ammaaf Bituu hin dandeessani');
  }

}
