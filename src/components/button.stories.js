import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';


const withDefault = () => (
<Button onClick={action('cliquei...')}>Hello Button</Button>
);
export default {
    title: 'Button',
    component: Button,
} 
export {
    withDefault
} 