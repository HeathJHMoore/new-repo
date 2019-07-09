import React from 'react';
import scatShape from '../../helpers/propz/ScatShape';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ScatCard extends React.Component {
  static propTypes = {
    poo: scatShape.scatCardShape,
    deleteScat: PropTypes.func.isRequired
  }

  deleteMe = (e) => {
    e.preventDefault();
    const {poo, deleteScat} = this.props;
    deleteScat(poo.id)
  }

  render() {
    const { poo } = this.props;
    const singleLink = `/scat/${poo.id}`;
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{poo.color}</h5>
            <p className="card-text">{poo.location}</p>
            <button class="btn btn-danger" onClick={this.deleteMe}>Delete</button>
            <Link className="btn btn-primary" to={singleLink}>View</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard