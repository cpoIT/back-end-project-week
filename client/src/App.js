import React, { Component } from "react";
import { NoteListViewers, SingleNoteViewer } from "./views";
import { EditView, CreateNewView, DeleteModal, Navigation } from './components' ;
import "./App.css";

import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ''
    }
  }

  render() {
    return (
      <div className='App'>
        <Navigation />
        <div className='ListViewRouters'>
          <Route 
            exact path="/" 
            component={NoteListViewers} />
          <Route 
            exact path='/note/add' 
            render={props => <CreateNewView {...props} 
            notes={this.state.notes} />} />
          <Route 
            exact path = '/note/:id'
            render={props => <SingleNoteViewer {...props}
            notes={this.state.notes} />} />
            <Route 
            path = '/note/edit/:id'
            render={props => <EditView {...props}
            notes={this.state.notes} />} />
            <Route 
            path = '/note/delete/:id'
            render={props => <DeleteModal {...props}
            notes={this.state.notes} />} />
        </div>
      </div>
    )
  }
}

export default App;
// path = '/notes/:id' 