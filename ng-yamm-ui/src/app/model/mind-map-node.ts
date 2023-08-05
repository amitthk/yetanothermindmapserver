export class MindMapNode {
  id: Number | undefined;
  text: string | '' | undefined;
  children?: MindMapNode[] | null;
  parent?: MindMapNode;
}
