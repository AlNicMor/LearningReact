import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './Search';
import ContentTable from './Table';
import './App.css';



const list = [
{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
},
{
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Alan Moreno, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
},
];



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: list,
      query: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({query: event.target.value});
  }
  

  render() {
    const {list, query} = this.state;
    
    return (
      <MuiThemeProvider>
      <div className="App">
          <Search
            value={query}
            onChange={this.onSearchChange}
          >
          Search
          </Search>
          <ContentTable
          list={list}
          pattern={query}
          ></ContentTable>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default App;