import React from 'react'
import './App.css'

import { exampleTree } from './exampleTree'
import { Person } from './Person'

const getPeopleFromTree = () =>{
  const people = exampleTree.map(p => new Person(p.id, p.name, p.gender, p.parents, p.children))
} 

function App() {
//load tree object
//convert to people
//convert to nodes + edges
//display
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
