console.log('app is running');

var appDiv=document.getElementById('app');
var appDiv2=document.getElementById('app2');

var username='Tasos';
var surname='Sardelis'
var template = (
<div>
    <h1>{username} This is my first React App</h1>
    <p>Hello</p>
</div>
)

var secondtemplate=(
    <div>
        <h2>Hello, this is a JSX template</h2>
        <span>Mas zalises ta arxidia</span>
    </div>
)
ReactDOM.render(template,appDiv)
ReactDOM.render(secondtemplate,appDiv2)