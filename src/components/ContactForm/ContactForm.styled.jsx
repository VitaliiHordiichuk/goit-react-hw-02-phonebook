import styled from '@emotion/styled'

export const Form = styled.form`
      border: 1px solid black;
    padding: 20px;
    width: 300px;
    max-width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
`
export const Label = styled.label`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    width: 150px;

`

export const Button = styled.button`
    width: 100px;
    border: none;
    outline: 1px solid black;
    border-radius: 5px;
    padding: 2px 5px;
    cursor: pointer;
    &:hover, &:focus{
        background-color: #5860f7;
        color: white;
    }
`







