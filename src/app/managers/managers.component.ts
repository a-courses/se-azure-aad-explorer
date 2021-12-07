import {Component, OnInit} from '@angular/core';
import {AadService} from '../services/aad.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.less']
})
export class ManagersComponent implements OnInit {

  managers: any;

  constructor(private aadService: AadService) {
    console.log('constructor');
  }

  ngOnInit(): void {
    this.aadService.loadAllManagers().subscribe(mgrs => {
      this.managers = mgrs;
    });
  }

}
