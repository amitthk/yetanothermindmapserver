import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MindMapCollaborationService {

  constructor(private socket: Socket) { }

  connect(): void {
    this.socket.connect();
  }

  disconnect(): void {
    this.socket.disconnect();
  }

  // Define methods to emit and listen for events related to adding, deleting, updating, and moving nodes
  // For example:
  sendAddNodeEvent(node: any): void {
    this.socket.emit('add-node', node);
  }

  receiveAddNodeEvent(): Observable<any> {
    return this.socket.fromEvent('add-node');
  }

  // Similar methods for other events
}
