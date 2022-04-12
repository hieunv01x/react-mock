import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import 'assets/style.scss';

import Header from 'components/Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => (
  <Router>
    <Header />
  </Router>
);

export const DefaultHeader = Template.bind({});
