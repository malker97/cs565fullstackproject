import React from "react";
import { DataGrid } from '@mui/x-data-grid';
const columns = [
  { field: 'id', 
  headerName: 'EventID', 
  width: 90 },
  {
    field: 'starttime',
    headerName: 'Start Time',
    width: 150,
    editable: true,
  },
  {
    field: 'endtime',
    headerName: 'End Time',
    width: 150,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    type: 'text',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    // description: 'This column has a value getter and is not sortable.',
    type: 'text',
    sortable: false,
    width: 240,
  },
];

const rows = [
  { id: 1, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
  { id: 2, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
  { id: 3, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
  { id: 4, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
  { id: 5, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
  { id: 6, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
  { id: 7, starttime: '2022/03/09 0:00', endtime: '2022/03/09 0:00', location: 'Portland', description: 'Final Project Presentation' },
];
function Tasklist() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
export default Tasklist;