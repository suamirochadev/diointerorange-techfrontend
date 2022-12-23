import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 25%;
    height: 60%;
    
    border-radius: 10px;
`
export const Row = styled.div`
    display: block;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`