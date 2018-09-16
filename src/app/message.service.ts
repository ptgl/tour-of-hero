import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages : string[]  = [];

  addMsg(message: string){
    this.messages.push(message);
  }

  clearAll(){
    this.messages = [];
  }

}
