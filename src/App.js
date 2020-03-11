import React,{ Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component.jsx';

import { Searchbox } from './components/search-box/search-box.component.jsx'


class App extends Component{

  constructor(){
    super();

    this.onSearchChange = this.onSearchChange.bind(this);
    this.title = "Monters Rolodex";

    this.state = {
      monsters:[],
      searchList : ""
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters : users }))
    // .then(users => console.log(users))
  }

  onSearchChange = (event)=>{
    console.log(event.target.value);

    this.setState({
      searchList : event.target.value
    })

  }

  render(){

    const { monsters, searchList } = this.state;
    const filterMonster = monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchList.toLowerCase()) || monster.email.toLowerCase().includes(searchList.toLowerCase())
    });

    return (
      <div className="App">
        <h1 className="title"> { this.title } </h1>
      <Searchbox onSearchChange={this.onSearchChange} datas={filterMonster}/>

      <CardList monsters={filterMonster}/>
      </div>
    );

  };


}

export default App;
