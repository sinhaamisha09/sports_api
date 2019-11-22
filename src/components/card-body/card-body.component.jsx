import React from 'react';
import Button from '../button/button.component';


class CardBody extends React.Component {
  render() {
  	 const {text, title } = this.props;
    return (
      <div className="card-body">
        
        <h2>{title}</h2>
        
        <p className="body-content">{text}</p>
        
        <Button />
      </div>
    )
  }
}

export default CardBody;