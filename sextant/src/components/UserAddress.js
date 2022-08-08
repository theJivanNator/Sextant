
import React, { useEffect, useState} from 'react';

import Card from "./Card"
//for calsses components//

class UserAddress extends React.Component {
   
    constructor(props) {
      super(props);
     
      this.state = {
        error: null,        
        isLoaded: false,
        items: ""
      };
    }
  
    componentDidMount() {
        if(this.props.name=="IPv4"){
            fetch("https://api.ipify.org?format=json")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }else{
            fetch("https://api64.ipify.org?format=json")
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
      
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) { 
        return <div>Loading...</div>; 
      } else { 
      //  console.log(items);
        return (           
            <Card name ={this.props.name+" Address"} cardconent ={items.ip.toString()}></Card>
            
            
        );
      }
    }
  }
  export default UserAddress;