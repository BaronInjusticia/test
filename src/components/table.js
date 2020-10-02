import React from 'react'
import MaterialTable from 'material-table'
import IconButton from '@material-ui/core/IconButton';
import AddIcon from "@material-ui/icons/AddAlarm";


    function Table() {
        const { useState } = React;
        const addActionRef = React.useRef();
      
        const [columns,] = useState([
          { title: 'Nombre', field: 'name' },
          { title: 'Apellido', field: 'surname', initialEditValue: 'initial edit value' },
          { title: 'Usuario', field: 'user', type: 'numeric' },
          { title: 'Edad',field: 'age',},
          { title: 'Rol', field: 'role', lookup: { 1: 'Reportes', 2: 'AdminIT', 3: 'SupervisorCompras', 4: 'SupervisorVentas' }},
          { title: 'Status', field: 'status', lookup:{1:'activo', 2:'inactivo'}},
          { title: 'Ejecutivo', field: 'ejecutivo', editable: false, render:(rowData) =>
          rowData && (
            <IconButton
              color="secondary"
              onClick={() => addActionRef.current.click()}
            >
              <AddIcon />
            </IconButton>
          )
      }
        ]);
      
        const [data, setData] = useState([
          { name: 'Jose', surname: 'Fdz', user: 214124, age: 63, role:2, ejecutivo: '' },
          { name: 'Pepe', surname: 'Hdz', user: 224354, age: 34,},
        ]);
      
        return (
          <MaterialTable
            title="Test"
            columns={columns}
            data={data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
      
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                  }, 1000)
                }),
            }}
          />
        )
      }
      

export default Table;