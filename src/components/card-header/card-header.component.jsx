import React from 'react';

class CardHeader extends React.Component {
  render() {
    const {image, category } = this.props;
    return (
      <header style={{
			backgroundImage: `url(${image})`
		}}  className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}


export default CardHeader;