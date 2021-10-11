import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`

`;

export const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: lightgray;
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 70%;
    margin: 0 0 10px 0;
    padding: 10px;
    font-size: 16px;
`;

export const Button = styled.div`
    width: 40%;
    border:none;
    outline: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-top: 20px;
`;




function SignUp() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm password"/>
                    <Button>Sign Up</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default SignUp;
