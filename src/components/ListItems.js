import React from 'react';

export const ListItems = ({ concept, amount, type, id, date }) => {

  const dateShort = date.substr(0,10)
 
  return (
   
      <>
        
        
          <tr>
            <th scope='row'>{id}</th>
            <td>{concept}</td>
            <td>{amount}</td>
            <td>{type}</td>
            <td>{dateShort}</td>
          </tr>
         
        
      </>
    
  );
};
