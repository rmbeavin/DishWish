import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';

const cards = {
  width: '600px',
  height: '550px',
  margin: '10px'
}
const DisplayRecipe = (props) => {
    return (
     <div style={cards}>
          <Grid.Column >
            <Grid.Row >
              <Card>
                <Image src={props.recipe.thumbnail} width='300px' height='200px'/>
                  <Card.Content>
                    <p>{props.recipe.title}</p>
                    <p>{props.recipe.href}</p>
                    <p>{props.recipe.ingredients}</p>
                  </Card.Content>
              </Card>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }
export default DisplayRecipe;
