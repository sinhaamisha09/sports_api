import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const { linkUrl, category } = this.props;
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
        <Link to={`url(${linkUrl})`} className='option'>
        {category}
      </Link>
      </button>
    )
  }
}


export default Button;