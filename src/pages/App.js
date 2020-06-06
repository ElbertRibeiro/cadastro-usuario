import React from 'react';
import ServerTable from 'react-strap-table';

import '../assets/App.css';



export default  function App() {
  const url = 'https://react-strap-table.com/users';
  const columns = ['id', 'name', 'email', 'created_at'];
  const options = {  
     headings: {id: '#', created_at: 'Created At'},  
     sortable: ['name', 'email']  
  };  
  return (  
      <ServerTable columns={columns}  
       url={url}  
       options={options} 
       bordered hover/>  
  );

}