import React from 'react';
import ReactDOM from 'react-dom';

let arr = ['first', 'second', 'third', 'fourth', 'fifth'];

let RList = (props) => {
    let list = props.data.map((value, index) => <li key={index}>{value}</li>);
    return(<ol>{list}</ol>);
}

ReactDOM.render(<RList data={arr}/>, document.getElementById("div1"));
