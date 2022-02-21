import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor(private gifs_service:GifsService) { }

  get historial():string[]{
    return this.gifs_service.historial
  }

  ngOnInit(): void {
    
  }

  buscar(value:string):void {
    this.gifs_service.buscarGifs(value)
  }
}
