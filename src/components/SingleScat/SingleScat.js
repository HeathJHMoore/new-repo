import React from 'react'
import PooData from '../../helpers/data/PooData';

class NewScat extends React.Component {
  state = {
    scat: {}
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    PooData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('no poop for you'))
  }

  deleteScat = () => {
    const pooId = this.props.match.params.id;
    PooData.deletePoos(pooId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error(err))
  }

  render() {
    const { scat } = this.state
    return (
      <div>
        <h2>{scat.sampleNum}</h2>
        <h2>{scat.location}</h2>
        <h2>{scat.color}</h2>
        <h2>{scat.animal}</h2>
        <h2>{scat.weight}</h2>
        <button class="btn btn-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    )
  }
}

export default NewScat;