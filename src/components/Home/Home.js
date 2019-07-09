import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import ScatCard from '../ScatCard/ScatCard';
import PooData from '../../helpers/data/PooData';
import './Home.scss';

class Home extends React.Component {

  state = {
    poos: [],
  }

  getPoops = () => {
    PooData.getPoos(firebase.auth().currentUser.uid)
      .then(poos => this.setState({ poos }))
      .catch(err => console.error('couldnt get poo', err))
  }

  componentDidMount = () => {
    this.getPoops();
  }

  deleteScat = (pooId) => {
    PooData.deletePoos(pooId)
      .then(() => this.getPoops())
      .catch(err => console.error(err))
  }

  render() {
    const makePooCards = this.state.poos.map((poo) => (
      <ScatCard key={poo.id} poo={poo} deleteScat={this.deleteScat}/>
    ))
    return (
      <div className="Home container">
          <h1>this is home</h1>
          <div className="row d-flex justify-content-between">
          {makePooCards}
          </div>
      </div>
    );
  }
}

export default Home