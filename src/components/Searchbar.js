import React from 'react';

class Searchbar extends React.Component {
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="col">
                <div className="input-group">
                    <input className="form-control" onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-dark" type="submit">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default Searchbar;