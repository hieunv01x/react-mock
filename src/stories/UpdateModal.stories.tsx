import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import 'antd/dist/antd.min.css';
import 'assets/style.scss';

import { UpdateModal } from 'components/UpdateModal';

export default {
  title: 'Modal',
  component: UpdateModal,
} as ComponentMeta<typeof UpdateModal>;

const Template: ComponentStory<typeof UpdateModal> = (args) => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return (
    <Provider store={store}>
      <UpdateModal {...args} />
    </Provider>
  );
};

export const DefaultUpdateModal = Template.bind({});
DefaultUpdateModal.args = {
  showModal: true,
  mode: 'edit',
  data: {
    id: '',
    name: '',
    description: '',
    watchers: 0,
    language: '',
    open_issues: 0,
    private: false,
  },
};
