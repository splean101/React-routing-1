import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const First = () => (
    <div>
        <h2>First component</h2>
        <Router>
            <Link to='/second'>second</Link>
        </Router>
    </div>
);
const Second = () => (
    <div>
        <h2>Second component</h2>
        <Router>
            <Link to='/third'>third</Link>
        </Router>
    </div>
);
const Third = () => (
    <div>
        <h2>Third component</h2>
        <Router>
            <Link to='/first'>first</Link>
        </Router>
    </div>
);

const Navigation = () => {
    return (<Router>
        <Route exact path='/' component={First} />
        <Route exact path='/first' component={First} />
        <Route exact path='/second' component={Second} />
        <Route exact path='/third' component={Third} />
    </Router>);
};

ReactDOM.render(<Navigation />, document.getElementById("div1"));
