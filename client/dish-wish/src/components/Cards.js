import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Search from './Search';

const cards = {
  width: '300px',
  height: '450px',
  margin: '10px'
}





const DisplayRecipe = (props) => {
    return (
     <div style={cards}>
          <Grid.Column >
            <Grid.Row >
              <Card style={cards}>
                {props.recipes.[1] && <p>{props.recipes.[1]}</p>}
              </Card>
           </Grid.Row>
          </Grid.Column>
        </div>
    );
  }

  export default DisplayRecipe;
