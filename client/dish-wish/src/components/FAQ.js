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
			<div style={{display: 'flex', justifyContent: 'center', fontSize: '2vh', color: 'red'}}>
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
            A: When on the home page you click the plate with silverware, it takes you to the Recipes page. On the Recipes page, type in the ingredients you have. The results are then displayed below. Finally, make the dish of your choice, and enjoy your meal.
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
					Q: Is there a way to make chicken recipes without using chicken?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            A: Yes, it is called using tofu as a substitute.
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
						Q: What day is a potatoe's least favorite?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
          <p>
            A: Fri-day.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 7} index={7} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: What did the doctor prescribe to the sick lemon?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 7}>
          <p>
            A: Lemon-aid.
          </p>
        </Accordion.Content>
				<Accordion.Title active={activeIndex === 8} index={8} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: What fruit never ever wants to be alone?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 8}>
          <p>
            A: A pear.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 9} index={9} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: What vegetable grows eggs?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 9}>
          <p>
            A: Eggplant.
          </p>
        </Accordion.Content>
        <Accordion.Title active={activeIndex === 10} index={10} onClick={this.handleClick}>
          <Icon name='dropdown' />
            Q: How do you know carrots are good for your eyes?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 10}>
          <p>
            A: You never see rabbits wearing glasses.
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
