import React from 'react';


const clientId = '4R0ldeB8K40L8Jbnz-q_DBmobACBESkomuvjsRqoS8Q';
const endpoint = 'https://api.unsplash.com/search/photos';

export default class ApiImages extends React.Component {
    constructor(props) {
        super(props);
        this.query = '';
        this.trackQuery = this.trackQuery.bind(this);
        this.search = this.search.bind(this);

        this.state = {
            images: []
        };
    }

    search() {
        fetch(`${endpoint}?query=${this.query}&client_id=${clientId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    images: data.results
                });
            });
    }

    trackQuery(event) {
        this.query = event.target.value;
    }

    renderImages() {
        return (
            <div className="image-container">
                {this.state.images.map(image => (
                    <img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
                ))}
            </div>
        );
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.trackQuery} />
                <button className="btn-images" onClick={this.search}>Search</button>
                {this.renderImages()}
            </div>
        );
    }
}
