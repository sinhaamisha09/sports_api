import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const PostsData = [
  {
    "category": "CRICKET",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBBSRK_kgMOev4oTuzzyd-Q5xq0kp1kT-c8vuQh6mIgJpW7t0&s',
    id: 1,
    "title": "CNN Acquire BEME",
    "text": "",
    linkUrl: 'shop/cricket' 
  },
  {
    "category": "FOOTBALL",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZODn1bnfiLXtg56aHtsEa29wESois40gS5BW9nnN_3ou_zvCtEQ&s',
    id: 2,
    "title": "CNN Acquire BEME",
    "text": "",
    linkUrl: 'shop/footbal'
  },
  {
    "category": "TENNIS",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HCSmRrx0TGaYQ7y0yrCtGorv1p5PIVKfA659V_pBugLDQ4rsXA&s',
    id: 1,"title": "CNN Acquire BEME",
    "text": "",
    linkUrl: 'shop/tennis'
  }        
]
  
class Directory extends React.Component { 
  constructor() {
    super();
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  } 

  render() {
    return(
     <div>
      <Link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
      <script src="https://use.fontawesome.com/f5ea91e308.js"></script>
      <div id="app">
        <header className="app-header"></header>
        <Title />
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
        </div>
      </div>
    </div>
    );
  }
}


class Title extends React.Component {
  render() {
    return <section className="app-title">
      <div className="app-title-content">
        <h1>Latest Sports News</h1>
        <p>Checkout your favourite sport matches</p>
    
      </div>
    </section>
  }
}


class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}


class CardHeader extends React.Component {
  render() {
    const {image, category } = this.props;
    var style = { 
        backgroundimage: 'url(' +image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}


class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.details.category}image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}

export default Directory;

