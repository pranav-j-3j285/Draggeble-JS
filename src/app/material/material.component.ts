import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CdkDrag,
    CdkDropList,
    MatButtonModule,
    MatInputModule,
  ]
})
export class MaterialComponent {

  title = 'Materail';

  isEditing: boolean = false;
  isEditingId: any = null;
  
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  removeItemFromArray(index: any, array: any) {
    array.splice(index, 1)
  }

  addItemIntoArray(value: any, array: any) {
    array.push(value)
  }

  editItemIntoArray(value: any, array: any) {
    array[this.isEditingId] = value;
    this.isEditing = false
    this.isEditingId = null
  }
  
  editItemIntoWeb(value: any, index: any, element: any) {
    this.isEditing = true
    this.isEditingId = index
    element.value = value
  }
}
