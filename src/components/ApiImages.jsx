import React from 'react';
import Modal from 'react-modal';

const clientId = '4R0ldeB8K40L8Jbnz-q_DBmobACBESkomuvjsRqoS8Q';
const endpoint = 'https://api.unsplash.com/search/photos';

Modal.setAppElement('#root'); // Importante para accesibilidad

export default class ApiImages extends React.Component {
    constructor(props) {
        super(props);
        this.query = '';
        this.trackQuery = this.trackQuery.bind(this);
        this.search = this.search.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            images: [],
            modalIsOpen: false,
            selectedImage: ''
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

    openModal(imageUrl) {
        this.setState({
            modalIsOpen: true,
            selectedImage: imageUrl
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedImage: ''
        });
    }

    renderImages() {
        return (
            <div className="image-container">
                {this.state.images.map(image => (
                    <img
                        key={image.id}
                        src={image.urls.thumb}
                        alt={image.alt_description}
                        onClick={() => this.openModal(image.urls.full)}
                        className="thumbnail"
                    />
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

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Image Modal"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <button className="modal-close" onClick={this.closeModal}>Close</button>
                    <img src={this.state.selectedImage} alt="Enlarged" className="modal-image" />
                </Modal>
            </div>
        );
    }
}
