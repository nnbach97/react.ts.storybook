import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, Props } from '../src/components/Alert';

const meta: Meta = {
  title: 'Atoms/Alert',
  component: Alert,
};

export default meta;

const Template: Story<Props> = args => <Alert {...args} />; // Component sẽ nhận những gì và render ra

// Default
export const Default = Template.bind({}); // Template.bind({}) Dùng để tạo ra 1 bản copy để tái sử dụng các đoạn code trùng lặp

Default.args = {
  title: 'Some Thing',
  message: 'Hello'
};

// Success
export const Success = Template.bind({}); // Template.bind({}) Dùng để tạo ra 1 bản copy để tái sử dụng các đoạn code trùng lặp

Success.args = {
  title: 'Success',
  message: 'Successed',
  category: 'success'
};
