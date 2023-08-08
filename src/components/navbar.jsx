import React, { Component } from 'react';

class Navbar extends Component {
    state = {  } 
    render() { 
        return <nav className="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Navbar</a>
        </div>
      </nav>;
    }
}
 
export default Navbar;