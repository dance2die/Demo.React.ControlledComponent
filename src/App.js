import React, {Component} from 'react';
import './App.css';
import ContactEdit from './components/ContactEdit';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: {
                firstName: "Sung",
                lastName: "Kim",
                phone: "111-222-3333"
            }
        };
    }

    render() {
        return (
            <div className="App">
                <ContactEdit contact={this.state.contact} />
            </div>
        );
    }
}

export default App;
