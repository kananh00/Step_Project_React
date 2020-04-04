import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Homepage, Create, Archive, SingleNote} from './pages';
import {Header} from './commons';
import { NotesContextProvider } from './context/notes';
function App() {
  return (
    <Router>
      <NotesContextProvider>
        <Header/>
          <Switch>
            <Route exact path = "/" component = {Homepage} />
            <Route path = "/create" component = {Create} />
            <Route path = "/singlenote/:id" component = {SingleNote} />
            <Route path = "/archive" component = {Archive} />
          </Switch>
        </NotesContextProvider>
    </Router>
  );
}

export default App;
