import React from 'react';
import VIDEO_DATA from './video-data.data.js';
// import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
 
class Video extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            collections: VIDEO_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (

            <div className='video-page'>
                 {
                //     collections.map(({ id, ...otherCollectionProps }) => (
                //         // <CollectionPreview key={id}{...otherCollectionProps} />
                //     ))
                }
            </div>
        );
    }
}
export default Video;

// import SearchBar from '../searchbar/searchbar.component.jsx';
// import youtube from '../../apis/youtube.component.jsx';
// import VideoList from '../video-list/video-list.component.jsx';
// import VideoDetail from '../video-details/video-details.component.jsx';
// import './video.css';

/**
 * This function searches for videos that are associated with a particular Freebase
 * topic, logging their video IDs and titles to the Apps Script log. This example uses
 * the topic ID for Google Apps Script.
 *
 * Note that this sample limits the results to 25. To return more results, pass
 * additional parameters as documented here:
 *   https://developers.google.com/youtube/v3/docs/search/list
 */
// function searchByTopic() {
//   var mid = '/m/0gjf126';
//   var results = YouTube.Search.list('id,snippet', {topicId: mid, maxResults: 25});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }

// *
//  * This function searches for videos related to the keyword 'dogs'. The video IDs and titles
//  * of the search results are logged to Apps Script's log.
//  *
//  * Note that this sample limits the results to 25. To return more results, pass
//  * additional parameters as documented here:
//  *   https://developers.google.com/youtube/v3/docs/search/list
 
// function searchByKeyword() {
//   var results = YouTube.Search.list('id,snippet', {q: 'sports', maxResults: 25});
//   for(var i in results.items) {
//     var item = results.items[i];
//     Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//   }
// }

// class Video extends React.Component {
//     state = {
//         videos: [],
//         selectedVideo: null
//     }
//     handleSubmit = async (termFromSearchBar) => {
//         const response = await youtube.get('/search', {
//             params: {
//                 q: termFromSearchBar
//             }
//         })
//         this.setState({
//             videos: response.data.items
//         })
//     };
//     handleVideoSelect = (video) => {
//         this.setState({selectedVideo: video})
//     }

//     render() {
//         return (
//             <div className='ui container' style={{marginTop: '1em'}}>
//                 <SearchBar handleFormSubmit={this.handleSubmit}/>
//                 <div className='ui grid'>
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Video;


