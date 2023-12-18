import React from "react";
import "./TableList.css";
import tablelistdata from "../../Jsondata/tablelistdata.json";

const TableListComponent = () => {
  return (
    <div className="task">
      <h3 className="taskname">Table List</h3>
      <div className="maintable">
        <table className="table">
          <tr className="tablehead">
            <td>Sprint Name</td>
            <td>Status</td>
            <td>Start Date</td>
            <td>End Date</td>
            <td>Completed Date</td>
          </tr>
          {tablelistdata.map((data) => {
            return (
              <tr className="tabledata">
                <td>{data.SprintName}</td>
                <td>{data.Status}</td>
                <td>{data.StartDate}</td>
                <td>{data.EndDate}</td>
                <td>{data.CompletedDate}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default TableListComponent;
