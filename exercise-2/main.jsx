// Main.jsx file

// Create a simple component

    // In your render function...

            // Return div with two paragraphs

// Render your component in the `main` section

var MyComponent = React.createClass({
	render: function() {
		return(
			<div>
				<p>{this.props.name}</p>
				<p>{this.props.interest}</p>
			</div>
		)
	}
});

ReactDOM.render(<MyComponent name="rosemary" interest="dance"/>, 
	document.querySelector('main')
);