import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import {robots} from "./robots";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ''
        };
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        return (
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <SearchBox searchChange={this.onSearchChange}/>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <CardList robots={filteredRobots}/>
                </div>
            </div>
        );
    }
}