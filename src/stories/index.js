import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import NavBar from '../navbar';
import Square from '../index'
import Footer from '../footer';
// import Body from '../body';
// import Video from '../video';

// storiesOf('', module)
//   .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//
storiesOf('NavBar', module)
  .add('myNavBar', () => <NavBar/>)
storiesOf('Square', module)
  .add('board', () => <Square/>)
  storiesOf('Footer', module)
    .add('myFooter', () => <Footer/>)
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
