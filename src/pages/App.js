import React from 'react';

import '../assets/App.css';

// eslint-disable-next-line no-unused-vars
import firebase from '../Components/firebase';

let db = firebase.database();

export default class App extends React.Component {


  render() {
    return(
      <table>
        {db.map(db => (
          <tr key={db.id}>
            <td>{db.option}</td>
            <td>{db.type}</td>
          </tr>
      ))}
      </table>
    )
  }

}