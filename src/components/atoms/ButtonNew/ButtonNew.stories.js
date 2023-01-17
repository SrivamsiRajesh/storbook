import { default as Component } from "./index";

export default {
  component: Component
};

const Template = (args) => <Component {...args} />;

export const ButtonFilledPrimary = Template.bind({});
ButtonFilledPrimary.args = {
  variant: 'filled',
  color: 'primary',
  children: 'Sample Button'
};

export const ButtonFilledAuto = Template.bind({});
ButtonFilledAuto.args = {
  variant: 'filled',
  color: 'auto',
  children: 'Sample Button'
};

export const ButtonOutlinedPrimary = Template.bind({});
ButtonOutlinedPrimary.args = {
  variant: 'outlined',
  color: 'primary',
  children: 'Sample Button'
};

export const ButtonOutlinedAuto = Template.bind({});
ButtonOutlinedAuto.args = {
  variant: 'outlined',
  color: 'auto',
  children: 'Sample Button'
};