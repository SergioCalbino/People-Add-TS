
import React, { useEffect, useState } from 'react';
import { DataGrid, DataGridProps, GridRenderCellParams  } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addPeople } from '@/redux/states';
import store from '@/redux/store';
import { AppStore } from '@/redux/store';

export  interface PeopleTableInterface {}


const PeopleTable: React.FC<PeopleTableInterface> = () => {

    const dispatch = useDispatch()
  
    const pageSize:number[] = [5, 10, 25, 50, 100]
    const [selectedPeople , setSelectedPeople  ] = useState<Person[]>([]);
  
    const statePeople = useSelector((store: AppStore) => store.people);
    const favoritePeople = useSelector((store: AppStore) => store.favorites);
    
  
    //Metodos de filtro
    const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id);
  const filterPerson = (person: Person) => favoritePeople.filter(p => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };
  
    const columns = [
      {
      field: 'actions',
      type: 'actions',
      sorteable: false,
      headerName: '',
      minWidth: 50,
      renderCell: (params: GridRenderCellParams)=> <>{ 
        <Checkbox
          size='small'
          checked={findPerson(params.row)} //Busco en el arreglo si la persona esta seleccionada. Lo comparo con el params. El !! hace que sea o true o false
          onChange={() => handleChange(params.row)}
        />
      }</>
    },
      {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams)=> <>{params.value }</>
    },
      {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams)=> <>{params.value }</>
    },
      {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams)=> <>{params.value }</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Happines',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }
  
  ]
  useEffect(() => {
    setSelectedPeople(favoritePeople);
  }, [favoritePeople]);

  return (
    <div>
        <DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSizeOptions={pageSize}
        rows={statePeople}
        columns={columns}
        getRowId={(row: any) => row.id}
        />
     
    </div>
  )
}

export default PeopleTable