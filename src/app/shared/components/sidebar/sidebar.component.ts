import { Component,ViewChild,ElementRef} from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('busqueda')
  public busquedaInput!: ElementRef<HTMLInputElement>;
constructor(private GifsService:GifsService){}

public listarBusquedas05():string[]{
 const lista: string[]= this.GifsService.tagHistory;
 return lista;
}
get listarBusquedas(){
  return this.GifsService.tagHistory;
 }

 public busqueda():void{
  const input=this.busquedaInput.nativeElement.value;
  console.log("valor es : ",input)
  this.GifsService.searchTag(input);
 }
}
