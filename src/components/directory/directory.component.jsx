import React from 'react';
import Title from '../title/title.component';
import Card from '../card/card.component';
import './directory.styles.scss';

const PostsData = [
  {
    "category": "CRICKET",
    "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVBBSRK_kgMOev4oTuzzyd-Q5xq0kp1kT-c8vuQh6mIgJpW7t0&s',
    id: 1,
    "title": "CNN Acquire BEME",
    "text": "",
    linkUrl: 'shop/cricket' 
  },
  {
    "category": "FOOTBALL",
    "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZODn1bnfiLXtg56aHtsEa29wESois40gS5BW9nnN_3ou_zvCtEQ&s',
    id: 2,
    "title": "CNN Acquire BEME",
    "text": "",
    linkUrl: 'shop/footbal'
  },
  {
    "category": "TENNIS",
    "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HCSmRrx0TGaYQ7y0yrCtGorv1p5PIVKfA659V_pBugLDQ4rsXA&s',
    id: 3,
    "title": "CNN Acquire BEME",
    "text": "",
    linkUrl: 'shop/tennis'
  },     
   {
    "category": "BADMINTON",
    "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HCSmRrx0TGaYQ7y0yrCtGorv1p5PIVKfA659V_pBugLDQ4rsXA&s',
    id: 4,
    "title": "CNN Acquire BEME",
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



export default Directory;

