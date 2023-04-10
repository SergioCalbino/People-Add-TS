import { Person } from '@/models';
import { removeFavorite } from '@/redux/states';
// import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
// import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {

  const pageSize:number[] = [5, 10, 25, 50, 100]

  const dispatch = useDispatch();
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const handleClick = (person: Person) => {
     dispatch(removeFavorite(person));
  };

  const colums = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <>
          {
            <IconButton color="error" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
              {/* <Delete /> */}
            </IconButton>
          }
        </>
      )
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    
  ];
  return (
    <DataGrid
      rows={stateFavorites}
      columns={colums}
      disableColumnSelector
      // disableSelectionOnClick
      autoHeight
      pageSizeOptions={pageSize}
    
      getRowId={(row: any) => row.id}
    />
  );
};

export default FavoriteTable;