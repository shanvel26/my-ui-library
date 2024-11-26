import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    label: 'Click me',
    // variant: 'button--success',

    // disabled: false,
  }
  // args: {
  //   label: 'Click Me',
  //   padding: '12px 24px',
  //   margin: '20px',
  //   fontSize: '18px',
  //   fontWeight: '600',
  //   fontFamily: 'Arial, sans-serif',
  //   color: '#ffffff',
  //   backgroundColor: '#28a745',
  //   borderRadius: '8px',
  //   border: '2px solid #28a745',
  //   width: '200px',
  //   height: '50px',
  //   display: 'inline-flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  //   hoverBackgroundColor: '#218838',
  //   hoverColor: '#f8f9fa',
  //   focusOutline: '2px solid #218838',
  //   ariaLabel: 'Default Button',
  // },
};

export const Loader: Story = {
  args: {
    ...Basic.args, loading: true, loadingText: ''
  },
}
