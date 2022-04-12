import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'antd/dist/antd.min.css';
import 'assets/style.scss';

import { DeleteModal } from 'components/DeleteModal';

export default {
  title: 'Modal',
  component: DeleteModal,
} as ComponentMeta<typeof DeleteModal>;

const Template: ComponentStory<typeof DeleteModal> = (args) => <DeleteModal {...args} />;

export const DefaultDeleteModal = Template.bind({});
DefaultDeleteModal.args = {
  showModal: true,
};
