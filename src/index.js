import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <CardList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
