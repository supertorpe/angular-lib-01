import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  message: string;

  constructor() {
    this.message = 'Public rocks!!';
  }

  ngOnInit() {
  }

}
