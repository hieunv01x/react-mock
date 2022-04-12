import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import 'antd/dist/antd.min.css';
import 'assets/style.scss';

import { dataRepos } from 'stories/dataRepos';
import Table from 'components/Table';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <Table {...args} />
    </Provider>
  );
};

export const DefaultTable = Template.bind({});
DefaultTable.args = {
  dataRepos,
};
