import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0, flexStyle: {} };
        this.imageRef = React.createRef();

        this.altDescription = this.props.image.alt_description;
        this.url = this.props.image.urls.regular;
    }

    render() {
        return (
            <div
                style={{
                    gridRowEnd: `span ${this.state.spans}`,
                    ...this.state.flexStyle,
                }}
            >
                <img
                    ref={this.imageRef}
                    alt={this.altDescription}
                    src={this.url}
                />
            </div>
        );
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.SetSpans);
    }

    SetSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 2);
        const flexStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
        this.setState({ spans, flexStyle });
    };
}

export default ImageCard;
