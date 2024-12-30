import Button from "./Button";
import Center from "../Center/Center";
import { fn } from '@storybook/test';

export default {
    //title is import bec it is the name of component in left side of storybook, this should be unique in entire project
    title:'Form/Button',//Form is the group inside which button and input elements are there
    component: Button,
    decorators: [(story) =><Center>{story()}</Center>],
    // we can also pass default args, available for all templates
    // args: { 
    //     children:'Button'
    // }
    argTypes:{
        onClick: {action: 'clicked'}
    }
}

export const Primary = () => <Button variant = 'primary' onClick={()=>console.log('Primary Button Clicked')}>Primary</Button>
export const Secondary = () => <Button variant = 'secondary'>Secondary</Button>
export const Success = () => <Button variant = 'success'>Success</Button>
export const Danger = () => <Button variant = 'danger'>Danger</Button>

export const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
   ...PrimaryA.args,// if you pass agrs from another variable
   children: 'Long Primary Args'
}
