import React from 'react'

class NewScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    return (
      <h2>The editId is {editId}</h2>
    );
  }
}

export default NewScat;