import React from 'react';
import CardBody from '../card-body/card-body.component';
import CardHeader from '../card-header/card-header.component';
import './card.styles.scss';

class Card extends React.Component {
  render() {
  	 const { image, category, text, title } = this.props.details;
    return (
      <article className="card">
        <CardHeader category={category}
          image={image}/>
        <CardBody title={title}
          text={text}/>
      </article>
    )
  }
}

export default Card;