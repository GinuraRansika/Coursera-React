import React, { Component } from 'react';
import { Container } from 'reactstrap';

// In older React code bases, you may find Class components primarily used. 
// It is now suggested to use Function components along with Hooks.

//! Class Component
class Menu extends Component 
{

    constructor(props) {
        super(props);

        // properties related to this component that we can make use of
        this.state = {
            dishes: 
            [
                {
                    id: 0,
                    name:'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label:'Hot',
                    price:'4.99',
                    description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name:'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label:'',
                    price:'1.99',
                    description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name:'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label:'New',
                    price:'1.99',
                    description:'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name:'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label:'',
                    price:'2.99',
                    description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
                } 
            ]
        }
    }

    render(){
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 mt-5'>
                    <div className='d-flex align-items-center'>
                        <div className='flex-shrink-1'>
                            <img src={dish.image} alt={dish.name} />
                        </div>
                        <div className='flex-grow-1 ms-5'>
                            <h2 className='mt-0'>{dish.name}</h2>
                            <p>{dish.description}</p>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <Container>
                <row>
                    <div>
                        {menu}
                    </div>
                </row>
            </Container>
        );
    }
}

export default Menu;


//! Function Component
// function Menu(){ return <h1>...</h1>;}