import React, { useEffect, useState } from 'react';
import { DataGrid, DataGridProps, GridRenderCellParams  } from '@mui/x-data-grid';
import { People } from '@/data/people';
import { Person } from '@/models';
import { Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFavorite, addPeople } from '@/redux/states';

export interface HomeInterface {}

const Home: React.FC = () => {

  const dispatch = useDispatch()
  
  const pageSize:number[] = [5, 10, 25, 50, 100]
  const [selectedPeople , setSelectedPeople  ] = useState<Person[]>([]);

  

  //Metodos de filtro
  const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id) // Esto quiere decir que esta chequedo "Check"
  const filterPerson = (person: Person) => selectedPeople.filter(p => p.id !== person.id) 

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople)) 
    setSelectedPeople(filteredPeople)


  }

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

]
  useEffect(() => {
   dispatch(addPeople(People))
  }, [])
  
  return (
    <div className='margi' >
      <DataGrid
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight
        pageSizeOptions={pageSize}
        rows={People}
        columns={columns}
        getRowId={(row: any) => row.id}
        />
     
    </div>
  )
}

export default Home