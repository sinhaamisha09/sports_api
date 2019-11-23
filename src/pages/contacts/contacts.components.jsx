import React from 'react';
import FaceCard from '../../components/face-cards/face-cards.component.jsx';
import { CardList } from './components/card-list/card-list.component';


const ContactsPage = () =>  (
	<div className='contactspage'>
		<FaceCard/>
	</div>
);


// class ContactsPage extends React.Component { 
//   constructor() {
//     super();
    
//     this.state = {
//       posts: {}
//     }
//   }
//   componentWillMount() {
//     this.setState({
//       posts: MembersData
//     });
//   } 

//   render() {
//     return(
//      <div>
//       <div id="app">
//         <header className="app-header"></header>
//         <Title />
//         <div className="app-card-list" id="app-card-list">
//           {
//             Object
//             .keys(this.state.posts)
//             .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
//           }
//         </div>
//       </div>
//     </div>
//     );
//   }
// }


class ContactsPage extends Component {
  render() {
    return (
      <div className='App'>
        <h1>WEB MEMBERS</h1>
        <CardList />
      </div>
    );
  }
}

export default ContactsPage;