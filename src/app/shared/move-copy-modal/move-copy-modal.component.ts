import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface TreeViewNode {
  name: string;
  children?: TreeViewNode[];
}

const TREE_DATA: TreeViewNode[] = [
  {
    name: 'Repository 1',
    children: 
    [
      {
        name: 'Folder 1',
        children:
        [
          {
            name: 'Folder 1.1', 
          }
        ]
      }, 
      {
        name: 'Folder 2',
        children:
        [
          {
            name: 'Folder 2.1', 
          }
        ]
      }, 
      {
        name: 'Folder 3',
        children: 
        [
          {
           name: 'Folder 3.1', 
           children:
           [
             {
              name: 'Folder 3.1.1', 
              
             },

           ]
          },
          {
            name: 'Folder 3.2', 
            children:
           [
             {
              name: 'Folder 3.2.1', 
             },
           ]
          }
          
        ]
      }
    ],
  },
  {
    name: 'Repository 2',
    children: [
      {
        name: 'Folder 2.1',
      },
    ],
  },
  {
    name: 'Repository 3',
    children: [
      {
        name: 'Folder 3.1',
      },
    ],
  },

];

/** Flat node with expandable and level information */
interface TreeViewFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
 @Component({
  selector: 'app-move-copy',
  templateUrl: './move-copy-modal.component.html',
  styleUrls: ['./move-copy-modal.component.scss'],

})
export class MoveCopyModalComponent {

  activeNode:any;

  private _transformer = (node: TreeViewNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<TreeViewFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: TreeViewFlatNode) => node.expandable;
}
