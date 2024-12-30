import Center from "../Center/Center";
import Input from "./Input";

export default {
    //title is import bec it is the name of component in left side of storybook, this should be unique in entire project
    title: 'Form/Input',//Form is the group inside which button and input elements are there
    component: Input,
    decorators: [(story) =><Center>{story()}</Center>]

}

export const Small = () => <Input size = 'small' placeholder='small size'/>
export const Medium = () => <Input size = 'medium' placeholder='medium size'/>
export const Large = () => <Input size = 'large' placeholder='large size'/>

Small.storyName = 'Small Input' //we can also rename story in sidebar