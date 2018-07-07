import React from 'react';

export default class Card extends React.Component{
    render() {
        return(
            <div className="has-background-primary" style={{height: '100%'}}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={`https://robohash.org/${this.props.id}?200x200`} alt="robot"/>
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.name}</p>
                    <p className="subtitle is-6">{this.props.email}</p>
                </div>
            </div>
        );
    }
}