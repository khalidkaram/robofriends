import React from 'react';
import Card from "./Card";
import {robots} from "./robots";

export default class CardList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            cardsArray: robots.map((user) => {
                return this.renderCard(user.id, user.name, user.email);
            })
        }
    }

    renderCard(id, name, email) {
        return (
            <div key={id} className="column is-3">
                <Card id={id} name={name} email={email} />
            </div>
        );
    }

    render() {
        return (
            <div className="columns is-multiline">
                {this.state.cardsArray}
            </div>
        );
    }
}
