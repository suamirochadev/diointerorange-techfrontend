import styled from 'styled-components'

export const InputContainer = styled.div`
    width: 100%;
    height: 80px;
    backgroun-color: #AAFFAA;

    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;

    input {
        width: 90%;
        height: 45px;
        border-radius: 10px;
        border: 0;
        background-color: #AAF;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 10px;
        justify-content: center;
        border-color: pink; 
        

        font-size: 24px;
        font-family: 'Poppins', sans-serif;
        color: #FFF;
    }
    input:focus {
        outline-color: pink;
    }
    .error-input-border {
        border: 1px solid #FF0000;
    }
`