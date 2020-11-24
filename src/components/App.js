import React from 'react';
import Searchbar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import logo from '../assets/youtube.png';

class App extends React.Component {
    state = {
        videos: [],
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        });

        this.setState({
            videos: response.data.items
        });
    };

    render() {
        return (
            <>
                <nav className="navbar fixed-top flex-md-nowrap p-0 shadow-sm py-2 bg-white">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#"><img src={logo} width="100" /></a>
                    <Searchbar handleFormSubmit={this.handleSubmit}/>
                </nav>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <VideoList videos={this.state.videos}/>
                    </div>
                </div>
            </>
        );
    }
}

export default App;