import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtbuscar') txtbuscar !:ElementRef<HTMLInputElement>;

  constructor(private gifs_service:GifsService) { }

  ngOnInit(): void {
  }

  busqueda() : void {
    const value = this.txtbuscar.nativeElement.value;
    if(value.trim().length === 0)
      return ;
    
      this.gifs_service.buscarGifs(value)
    this.txtbuscar.nativeElement.value = '';
  }
}
