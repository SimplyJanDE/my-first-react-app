import React, { Component } from 'react';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
    state = { 
        items: []
    } 

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;
        
        let existingItem = this.state.items.find(item => item.name == name);
        if  (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push( {
                amount, 
                name, 
                price

            });
        }
            this.setState({items: currentItems});
            
        }
    
    render() { 
        return <React.Fragment>
            <div className='main-container'>
                 <div className='product-container'>
                    <Product onAdd={() => this.addItem(1, 'Tomaten' , 2.99)}image="Tomaten.jpg" title="Tomaten" description="Füge Tomaten zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Gurken' , 1.99)} image="Gurken.jpg" title="Gurken" description="Füge Gurken zu deinem Warenkorb hinzu"/>
                    <Product onAdd={() => this.addItem(1, 'Äpfel' , 3.99)} image="Äpfel.jpg" title="Äpfel"  description="Füge Äpfel zu deinem Warenkorb hinzu"/> 
                    <Product onAdd={() => this.addItem(1, 'Birnen' , 4.99)} image="birne.jpg" title="Birnen" description="Füge Birnen zu deinem Warenkorb hinzu"/>
                 </div>
               <ShoppingCart items={this.state.items}/>
             </div>
        </React.Fragment>;
        
    }
}
 
export default App;