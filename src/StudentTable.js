import React from "react";


const studenttable = (props) => {
  return (
    <table>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
      {props.studentdata.map((detail,index) =>
      (
        <tr>
        <td>{detail.firstname}</td>
        <td>{detail.lastname}</td>
        <td>{detail.age}</td>
        <td>{detail.id}</td>
        <button onClick={() =>props.view(detail)}>View</button>
        <button>Edit</button>
        <button onClick={() => props.delete(index)}>Delete</button>
      </tr>
      ))}
      
     
      
      
     
    </table>
  );
};
export default studenttable;
