// Main.jsx file

// Data to pass to our List elements
var employeeData = [
    {name:"Joan", title:"developer", salary:100000},
    {name:"Enrique", title:"manager", salary:200000},
    {name:"Shana", title:"developer", salary:105000},
    {name:"Shana", title:"manager", salary:105000},
];

// Simple ListItem component for showing an <li>
var Employee = React.createClass({
    render:function() {
        return(<tr className={this.props.title}>
            <td>{this.props.name}</td>
            <td>{this.props.title}</td>
            <td>{this.props.salary}</td>
        </tr>)
    }
});

// EmployeeTable
var EmployeeTable = React.createClass({
    render:function() {
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Salary</th>
                        </tr>
                        {this.props.data.map(function(d, i){
                            return <Employee key={'employee-' + i}
                                             name={d.name}
                                             salary={d.salary}
                                             title={d.title}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

// EmployeeSearch
var EmployeeSearch = React.createClass({
    getInitialState:function() {
        return({searchString:''});
    },
    // Add a filter funciton
    //dd a function `filter` to your `EmployeeTable` component in which you get the value of the event (`event.target.value`), 
    //and then **set the state** of your `searchString` to that value

    filter:function(event) {
        var value = event.target.value;
        this.setState({searchString:value});
    },

    render:function() {
        var employees = this.props.data;

        // Use this.state.searchString to filter down the `employees` array
        //In your `render` function, use `this.state.searchString` to filter down your `employees` array.
        employees.filter(function(d) {
            return d.name.match(this.state.searchString)
        }.bind(this));


        return(
            <div>
                <input onChange={this.filter} placeholder="Search employees"/>
                <EmployeeTable data={employees}/>
            </div>
        )
    }
});


// Render your component in the `main` section
ReactDOM.render(<EmployeeSearch data={employeeData}/>,
    document.querySelector('main')
);
