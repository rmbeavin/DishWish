import React, { Component } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';

export default class Faq extends Component {
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
			<div className="body">
      <Accordion styled>
        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
          <Icon name='dropdown' />
          	Q: How do you know carrots are good for your eyes?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
            A: You never see rabbits wearing glasses.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Q: You throw away the outside and cook the inside. Then you eat the outside and throw away the inside. What is it?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
						A: ear of corn.
          </p>
        </Accordion.Content>

        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
          <Icon name='dropdown' />
          Q: Can I add my own recipes to your search results?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
            A: No, you can not.
          </p>
        </Accordion.Content>

				<Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
          <Icon name='dropdown' />
					Q: Can I filter the results for my allergies?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
          <p>
            A: No, just use ingredients in your recipe that your not allergic too.
          </p>
        </Accordion.Content>

				<Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
          <Icon name='dropdown' />
					Q: Is there a way to make chicken recipes with out using chicken?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
          <p>
            A: Yes, it called using tofu as a substitute.
          </p>
        </Accordion.Content>

				<Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
          <Icon name='dropdown' />
					Q: How many recipes are avalble on your site?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
          <p>
            A: Millons.
          </p>
        </Accordion.Content>

				<Accordion.Title active={activeIndex === 6} index={6} onClick={this.handleClick}>
          <Icon name='dropdown' />
						Q: What day is a potatoes least favorite?
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
      </Accordion>
		</div>
    )
  }
}
