import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lists: [{
        name:'New',
        data: [{
            list: 'Grosery'
          },{
            list: 'Clothing'
        }],
        columns: [{
          Header: 'List',
          headerClassName: 'Table-header',
          accessor: 'list'
        },{
          Header: 'Delete',
          headerClassName: 'Table-header',
          accessor: 'delete',
          maxWidth: 100
        },{
          Header: 'Archive',
          headerClassName: 'Table-header',
          accessor: 'archive',
          maxWidth: 100
        }]
      },{
        name: 'Archived',
        data: [{
            list: 'Pharmacy'
          }],
        columns: [{
          Header: 'List',
          headerClassName: 'Table-header',
          accessor: 'list'
        },{
          Header: 'Delete',
          headerClassName: 'Table-header',
          accessor: 'delete',
          maxWidth: 100
        }]
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shoplists</h1>
        </header>
        {this.state.lists.map(function(list){
          return (
            <div>
              <h1>{list.name}</h1>
              <ReactTable noDataText="No entries!" pageSize="5" data={list.data} columns={list.columns}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
