import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  template: `
    <input #inp type="text" (keyup.enter)="addItem(inp.value)" />
    <div *ngIf="items" class="todo-list">
      <button @fade *ngFor="let item of items" (click)="removeItem(item)" class="todo-item">{{ item }}</button>
    </div>
  `,
  styles: [
    `
    .todo-list {
      display: flex;
      flex-direction: column;
    }
    .todo-item {
      padding: 12px;
      background-color: white;
      border: 1px solid #ccc;
      margin-bottom: 8px;
      cursor: pointer;
    }
    `
  ],
  animations: [
    trigger('fade', [
      state('void', style({
        opacity: 0
      })),
      transition('void => *', [
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000) 
      ])
    ])
  ]
})
export class TodosComponent {
  items: string[] = [
    'Clean the car',
    'Call the accountant',
    'Apply for space mission'
  ];

  addItem(input: string) {
    this.items.push(input);
  }

  removeItem(item: string) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
