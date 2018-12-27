import React from 'react';
import { Grid, Card, Image } from 'semantic-ui-react';
import Search from './Search';
import Recipes from './Recipes';

const cards = {
  width: '300px',
  height: '450px',
  margin: '10px'
}



// {props.recipes.title ? <p>{props.recipes.title}</p> : null}

const DisplayRecipe = (props) => {
    return (
     <div style={cards}>
          <Grid.Column >
            <Grid.Row >
              <Card>
                <p>test</p>
                <p>{props.recipe.title}</p>
              </Card>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }

  export default DisplayRecipe;
