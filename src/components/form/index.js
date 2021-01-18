import React from 'react';
import {Link} from 'react-router-dom'
import {
    Title,
    Container,
    Inner,
    Small,
    Error,
    Input,
    Button,
    Text,
    Base,
    InputControl,
    Card
} from './style/form'

export default function Form({ children}) {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>)
}

Form.Title = function FormTitle({ children}) {
    return (
        <Title >{children}</Title>
    )
}

Form.Base = function FormBase({children, ...restProps})
{
return(<Base {...restProps}>{children}</Base>)
}

Form.Text = function FormText({ children, ...restProps }) {
    return (
        <Text {...restProps}>{children}</Text>
    )
}

Form.Small = function FormSmall({ children, ...restProps }) {
    return (
        <Small {...restProps}>{children}</Small>
    )
}

Form.Link = function FormLink({ children, ...restProps }) {
    return (
        <Link {...restProps}>{children}</Link>
    )
}

Form.Error = function FormError({ children, ...restProps }) {
    return (
        <Error {...restProps}>{children}</Error>
    )
}

Form.InputControl = function FormInputControl({children})
{
    return(
    <InputControl>{children}</InputControl>
    )
}

Form.Input = function FormInput({...restProps }) {
    return (
        <Input {...restProps} />
    )
}

Form.Card = function FormCard({ children, ...restProps }) {
    return (
        <Card {...restProps}>{children}</Card>
    )
}

Form.Button = function FormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>{children}</Button>
    )
}