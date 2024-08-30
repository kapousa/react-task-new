// DataTable.jsx
import React from 'react';

function DataTable({ columns, data, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <table className='table-style'>
        <thead className='table-header'>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td className='td-style' key={colIndex}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
