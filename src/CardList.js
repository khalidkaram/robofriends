import React from 'react';
import Card from "./Card";

export default class CardList extends React.Component {
    renderCard(id, name, email) {
        return (
            <div key={id} className="column is-3">
                <Card id={id} name={name} email={email}/>
            </div>
        );
    }

    render() {
        return (
            <div className="columns is-multiline">
                {
                    this.props.robots.map((user) => {
                        return this.renderCard(user.id, user.name, user.email);
                    })
                }
            </div>
        );
    }
}
