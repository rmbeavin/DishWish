import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const cards = {
  width: '550px',
  height: '500px',
  margin: '10px'
}
const DisplayRecipe = (props) => {
    return (
     <div style={cards}>
          <Grid.Column >
            <Grid.Row >
              <Card.Group>
              <Card>
                <Image src={props.recipe.thumbnail} width='150px' height='150px' centered/>
                <Card.Header><h4>{props.recipe.title}</h4></Card.Header>
                <Card.Content>
                    <a href={props.recipe.href}>Take Me There!</a>
                    <p>Ingredients: {props.recipe.ingredients}</p>
                  </Card.Content>
              </Card>
              </Card.Group>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }
export default DisplayRecipe;
