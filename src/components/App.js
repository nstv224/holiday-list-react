
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    
    ]
  }

  render() {
    const myarr=this.cityList.filter((itm)=> itm.country==='India')
    return (
      <div id="main">
        <ol>
          {myarr.map((itm,idx)=>(
            <li key={`location${idx+1}`}>{`itm.name(${itm.country})`}</li>
          ))}
        </ol>
      </div>
    )
  }
}


export default App;
