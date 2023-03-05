import { Col, Container, Row } from "react-bootstrap"
import '../App.css';

const Recipe=(propes)=>{
    console.log(propes.recipelist)
    return <Container className="recipe">

  <Row>
    <Col sm="6">
      <img src={propes.recipelist.recipe.image} alt="#" width="400dp"></img>
    </Col>
    <Col sm="6">
      <h1>{propes.recipelist.recipe.label}</h1>
    <p>Ingredient:</p>
      <ol>
        {
          propes.recipelist.recipe.ingredientLines.map((ing)=><li>{ing}</li>)
        }
      </ol>
<h6><p>Meal Type :{propes.recipelist.recipe.mealType}</p></h6>
    </Col>
  </Row>
  <hr
   style={{
   background: "#47B5FF",
   height: "2px",
   border: "none",
   }}
/>
  <br></br>
  </Container>
 
}
export default Recipe