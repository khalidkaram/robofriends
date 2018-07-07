import React from "react";

export default class SearchBox extends React.Component {
    render() {
        return (
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label" htmlFor="robot_search">Robot name</label>
                </div>
                <div>
                    <input className="input" type="search" name="robot_search" onChange={this.props.searchChange}/>
                </div>
            </div>
        );
    }
}
