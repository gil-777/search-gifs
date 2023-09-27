import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {
  private _tagHistory: string[]=[];
  constructor() { }

  get tagHistory():string[]{
    return [...this._tagHistory];
  }

  public searchTag(tag:string):void{
    if(tag.length===0) return;
    this.organizedHistory(tag);
    //  this._tagHistory.unshift(tag);
      console.log("history: ",this._tagHistory);
      console.log(this._tagHistory);
    }

    private organizedHistory(tag:string){
      tag= tag.toLowerCase();
      if(this._tagHistory.includes(tag)){
        this._tagHistory=this._tagHistory.filter((oldTag) => oldTag !== tag)
      }
      this._tagHistory.unshift(tag);
      this._tagHistory=this._tagHistory.slice(0,10);
    }

}
