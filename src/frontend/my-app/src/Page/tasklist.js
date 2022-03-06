import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { createStore, action, useStoreActions, useStoreState } from "easy-peasy";

const columns = [
  {
    field: 'id',
    headerName: 'Event ID',
    width: 100
  },
  {
    field: 'name',
    headerName: 'Event Name',
    width: 180
  },
  {
    field: 'starttime',
    headerName: 'Start Time',
    width: 200,
    editable: true,
  },
  {
    field: 'endtime',
    headerName: 'End Time',
    width: 200,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    type: 'text',
    width: 120,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    // description: 'This column has a value getter and is not sortable.',
    type: 'text',
    sortable: false,
    width: 400,
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
  const [info, setinfo] = useState([]);
  const formateddata = [];

  const userid = useStoreState((state) => state.userid);

  const get_task = () => {
    axios
      .get(
        `/api/tasks/user/${userid}`
      )
      .then((res) => {
        console.log(res.data)
        setinfo(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getformat = () => {
    if (info) {
      info.map((element) => {
        formateddata.push({
          "id": element._id,
          "name": element.name,
          "starttime": element.start_time,
          "endtime": element.end_time,
          "location": element.location,
          "description": element.comment
        });
      });
    }
    return (
      <DataGrid
        rows={formateddata}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    )
  }

  useEffect(() => {
    get_task();
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
      {getformat()}
    </div>
  );
}
export default Tasklist;