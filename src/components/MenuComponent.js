import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import {
   Card,
   CardImg,
   CardImgOverlay,
   CardText,
   CardBody,
   CardTitle,
} from "reactstrap";

// In older React code bases, you may find Class components primarily used.

//! Class Component
class Menu extends Component {
   constructor(props) {
      super(props);

      // properties related to this component that we can make use of
      this.state = {
         selectedDish: null,
      };
   }

   onDishSelect(dish) {
      this.setState({ selectedDish: dish });
   }

   renderDish(dish) {
      if (dish != null) {
         return (
            <Card>
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
         );
      } else {
         return <div></div>;
      }
   }
   render() {
      const menu = this.props.dishes.map((dish) => {
         return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
               <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                     <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
               </Card>
            </div>
         );
      });

      return (
         <Container>
            <Row>{menu}</Row>
            <Row>{this.renderDish(this.state.selectedDish)}</Row>
         </Container>
      );
   }
}

export default Menu;

//! Function Component
// function Menu(){ return <h1>...</h1>;}
