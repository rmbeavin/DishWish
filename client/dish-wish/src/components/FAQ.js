import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';


export default class FAQ extends Component {
  state = { activeIndex: 0 }
  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    return (
      <div style={{backgroundColor: '#424e60', height: '100vh'}}>
			<div style={{display: 'flex', justifyContent: 'center', fontSize: '2vh', color: 'red', paddingtop: '2em;'}}>
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          	Frequently Asked Questions.
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            Questions people often ask us.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Q: How do you use DishWish?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
            A: On the home page, click the plate with silverware. This will take you to the Recipes page. On the Recipes page, type in the ingredients you have. The results are then displayed below. Finally, make the dish of your choice, and enjoy your meal.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Q: Can I add my own recipes to your search results?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            A: Not right now, but we are currently looking into this.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
					Q: Does your website grant wishes?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            A: Yes.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
					Q: Are there vegan recipes available?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            A: Yes.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
					Q: How many recipes are available on your site?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            A: Millons.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: Are there dessert recipes available?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            A: yes.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: Can I substitute ingredients on the recipes provided?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            A: Yes, but be aware that substituting ingredients can change the flavor of your dish.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: Can I use this on my mobile/tablet?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>
            A: Yes.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: Do your recipes provide nutritional facts?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>
            A: Not at the moment, but we are working on it.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Q: Can I see items in a certain order?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 10}>
          <p>
            A: Yes, they are sorted alphabetically.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 11} index={11} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Q: How do I support DishWish?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 11}>
          <p>
            A: You can either send us money though PayPal or our Patreon page.
          </p>
        </Accordion.Content>
      </Accordion>
		</div>
  </div>
    )
  }
}
