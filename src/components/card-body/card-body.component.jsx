import React from 'react';
import Button from '../button/button.component';
import SportsPage from '../../pages/sportsPage/sportspage.component';
import { Route, withRouter } from 'react-router-dom';


const CardBody = ({title, category, text, history, linkUrl, match}) => {
  console.log(match);
  return(    
      <div 
        onClick={()=> {
          // (<Route exact path={`${match.path}/:${category}`} component={SportsPage} />)
          history.push(`${match.url}${linkUrl}`)
        }
        }
      >
        <div className="card-body">
          
          <h2>{title}</h2>
          
          <p className="body-content">{text}</p>
              
          <Button />
        </div>
      </div>
    )};


export default withRouter(CardBody);