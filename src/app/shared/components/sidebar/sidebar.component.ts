import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
constructor(private GifsService:GifsService){}

public listarBusquedas05():string[]{
 const lista: string[]= this.GifsService.tagHistory;
 return lista;
}
get listarBusquedas(){
  return this.GifsService.tagHistory;
 }
}