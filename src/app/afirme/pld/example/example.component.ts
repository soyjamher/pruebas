import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-pld-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {

  settings = {
    actions : {
      columnTitle : 'Acciones',
      add : false,
      delete : false,
      edit : false,
      position : 'right',
      custom : [
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
    const elemets = this.service.getData();
    const data = elemets.filter(filtroUsuario);
    this.source.load(data);
  }
  
  onCustom(event) {
    alert(`'${event.action}' el registro de la alerta №: ${event.data.id}`)
  }
  
}

function filtroUsuario(elemento) {
  let mostrar = false;
  if( elemento.idEstatus == 6 ){
    mostrar = true;
  } else {
    mostrar = false;
  }
  if(elemento.atiende=='Emma Audi'){
    mostrar = true;
  } else {
    mostrar = false;
  }  
  return mostrar;
}


