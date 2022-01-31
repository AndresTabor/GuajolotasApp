import styled from "styled-components";

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 44px 24px 16px 24px;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    & a {
        color: black;
    }
    & a:nth-child(2){
        color: grey;
    }
`
export const ImgContainer = styled.div`
    width: 200px;
    height: 200px;
    
`
export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & h1{
        text-align: center;
        font-weight: 600;
    }

    & p{
        font-weight: 600;
        font-size: 1.4rem;
        color: var(--primary);
    }
`
export const AmountContainer = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    width: 190px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;

    & button{
        background-color: #FFFFFF;
        border: none;
    }
`
export const FlavorBtn = styled.button`
    opacity: 0.5;
    border: none;
    background-color: none;
    border-radius: 50%;
`
export const FlavorImage = styled.img`         
    width: 64px;
    height: auto;        
`
export const H2Title = styled.h2`
    font-weight: 600;
    margin: 0 0 24px 18px;
`
export const ComboDescription = styled.p`
    font-family: Inter;
    font-weight: normal;
    line-height: 138.84%;
    letter-spacing: 0.02em;
    color: #0D0D0D;
    opacity: 0.5;
    margin: 0 0 24px 18px;
`

export const ComboCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 16px;
    width: 152px;
    height: 138px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
`

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    height: 55%;
    justify-content: space-between;
    & input{
        width: 24px;
        height: 24px;
        border: 2px solid #0D0D0D;
    }
`
export const ComboItemDescription = styled.div`
    width: 100%;
    height: 45%;
    font-size: 0.8rem;
    font-weight: 600;
    text-align-last: start;
    & p {
        margin-bottom: 0;
    }
    & span {
        color: var(--primary);
    }
`

export const BtnAddCart = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ffff;
    border: none;
    background-color: var(--primary);
    width: 312px;
    height: 69px;
    padding: 24px 28px;
    border-radius: 40px;
`