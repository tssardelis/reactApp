'use strict';

console.log('app is running');

var appDiv = document.getElementById('app');
var appDiv2 = document.getElementById('app2');

var username = 'Tasos';
var surname = 'Sardeliss';
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        username,
        ' This is my first React App'
    ),
    React.createElement(
        'p',
        null,
        'Hello'
    )
);

var secondtemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        'Hello, this is a JSX template'
    ),
    React.createElement(
        'span',
        null,
        'Mas zalises ta arxidia'
    )
);
ReactDOM.render(template, appDiv);
ReactDOM.render(secondtemplate, appDiv2);
