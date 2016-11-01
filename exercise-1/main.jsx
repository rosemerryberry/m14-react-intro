// Main.jsx file

// Create a simple component

var SimpleComponent = React.createClass({
	render: function() {
		var name = "Rosemary";
		var interest = "dance";
		return(
			<div>
				<p>{name}</p>
				<p>{interest}</p>
			</div>
		)
	}
});

ReactDOM.render(<SimpleComponent/>, 
	document.querySelector('main')
);
    // In your render function...
        // Set variables `name` and `interest`


        // Return div with two paragraphs


// Render your component in the `main` section

