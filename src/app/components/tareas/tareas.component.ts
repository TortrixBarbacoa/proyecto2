import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  nombreTarea: string = '';
  listaTareas: Tarea[] = [];

  nuevaTarea() {
    console.log(this.nombreTarea);

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    this.listaTareas.push(tarea);
    this.nombreTarea = '';
    console.log(this.listaTareas);
  }

  actualizarTarea (tarea: Tarea, index: number) {
    this.listaTareas[index].estado = !tarea.estado;
  }

  eliminarTarea (index: number) {

    this.listaTareas.splice(index, 1);

  }

}
