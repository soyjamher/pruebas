import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-pld-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {

  settings = {
    actions : {
      columnTitle : 'Acciones',
      add : false,
      delete : false,
      edit : true,
      position : 'right',
      custom : [
        {
          name: 'editButtonContent',
          title: '<a href="#" class="ng2-smart-action ng2-smart-action-edit-edit ng-star-inserted"><i class="nb-edit" title="Edit"></i></a>'
        },
        {
          name: 'Aceptar',
          title: '<i class="nb-plus-circled" title="Aceptar"></i>'
        },
        {
          name: 'Rechazar',
          title: '<i class="nb-close-circled" title="Rechazar"></i>'
        },
      ],
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    columns: {
      id: {
        title: 'Id Alerta',
        editable: false,
      },
      entidad: {
        title: 'Entidad',
        editable: false,
      },
      fecha: {
        title: 'Fecha',
        editable: false,
      },
      atiende: {
        title: 'Atiende',
        valuePrepareFunction: (value) => { return value === '' ? 'Sin Asignar' : value },
        editor: {
          type: 'list',
          config: {
            list: [
              { value: 'Michael Seat', title: 'Michael Seat' },
              { value: 'Emma Audi', title: 'Emma Audi' },
            ],
          },
        },
        filter: {
          type: 'list',
          config: {
            selectText: 'Todos',
            list: [
              { value: '', title: 'Sin Asignar' },
              { value: 'Michael Seat', title: 'Michael Seat' },
              { value: 'Emma Audi', title: 'Emma Audi' },
            ],
          },
        },
      },
      estatus: {
        title: 'Validar',
        editable: false,
        filter: {
          type: 'list',
          config: {
            selectText: 'Todos',
            list: [
              { value: 'Pendiente', title: 'Pendiente' },
              { value: 'Positivo', title: 'Positivo' },
              { value: 'Negativo', title: 'Negativo' },
            ],
          },
        },
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }
  
  onCustom(event) {
    if( event.action === 'Aceptar' ){
      alert('holi')
    } else {
      alert('que mostramos?')
    }
  }

}