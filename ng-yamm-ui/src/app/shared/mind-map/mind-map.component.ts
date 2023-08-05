import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MindMapNode } from '../../model';

@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.css']
})
export class MindMapComponent implements OnInit{
  ngOnInit(): void {
    this.nodes.push({id:1, text: 'first'});
  }
  @Input() public nodes: MindMapNode[] = [];
  @Input() public selectedNode: MindMapNode | null | undefined;
  nextNodeId = 1;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const target: HTMLElement = event.target as HTMLElement;
    if (event.key === 'Enter') {
      if (this.selectedNode) {
        this.updateNodeText(event);
      } else {
        this.addNode(event);
      }
    } else if (event.key === 'Tab') {
      event.preventDefault();
      if (this.selectedNode) {
        this.addChildNode(event);
      }
    } else if (event.key === 'Delete') {
      if (this.selectedNode) {
        this.deleteNode();
      }
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      if (this.selectedNode && this.selectedNode.parent) {
        event.preventDefault();
        const parentChildren = this.selectedNode.parent.children;
        if(parentChildren!=null)
        {
        const currentIndex = parentChildren.findIndex(node => node === this.selectedNode);
        const newIndex = event.key === 'ArrowUp' ? currentIndex - 1 : currentIndex + 1;
        if (newIndex >= 0 && newIndex < parentChildren.length) {
          [parentChildren[currentIndex], parentChildren[newIndex]] = [parentChildren[newIndex], parentChildren[currentIndex]];
        }
        }
      }
    }
  }

  addNode(event: Event): void {
    const target: HTMLElement = event.target as HTMLElement;

    const newNode: MindMapNode = {
      id: this.nextNodeId++,
      text: target.innerText.trim(),
      children: []
    };
    this.nodes.push(newNode);
    this.selectedNode = newNode;
    target.focus();
  }

  updateNodeText(event: Event): void {
    const target: HTMLElement = event.target as HTMLElement;
    if(this.selectedNode!=null){
      this.selectedNode.text = target.innerText.trim();
    }
    this.selectedNode = null;
  }

  addChildNode(event: Event): void {
    const target: HTMLElement = event.target as HTMLElement;
    const parent = this.selectedNode;
    if(parent!=null){
      const newNode: MindMapNode = {
        id: this.nextNodeId++,
        text: target.innerText.trim(),
        parent: parent
      };
      parent.children!.push(newNode);
    this.selectedNode = newNode;
    }
    target.focus();
  }

  deleteNode(): void {
    if (this.selectedNode && this.selectedNode.parent) {
      const parentChildren = this.selectedNode.parent.children;
      if(parentChildren!=null){
        const index = parentChildren.indexOf(this.selectedNode);
      if (index !== -1) {
        parentChildren.splice(index, 1);
      }
      }
    } else {
      const index = this.nodes.indexOf(this.selectedNode!);
      if (index !== -1) {
        this.nodes.splice(index, 1);
      }
    }
    this.selectedNode = null;
  }
}
