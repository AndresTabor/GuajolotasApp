import styled from "styled-components";

export const Container = styled.div`
    font-weight: 600;
    font-family: 'Inter', sans-serif;  
    
`
export const CartTitle = styled.h1`
    font-weight: 600;
    font-size: 1.1rem;
    margin: 45px 0;
    text-align: center;
`
export const BackArrow = styled.svg`
    position: relative;
    margin-left: 24px;
    top: -72px;
`

export const CartIconContainer = styled.div`
    margin: 50% 0;
    text-align: center;
`

export const Btn = styled.button`
    position: fixed;
    bottom: 0px;
    left: 0;
    border: none;
    background-color: var(--primary);
    width: 312px;
    height: 69px;
    padding: 24px;
    opacity: 0.5;
    border-radius: 40px;
    margin: 16px 24px;
    color: #ffff;
`

export const DescriptionCard = styled.p`
    line-height: 15px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0;
    & span{
        color: var(--primary);
    }
`

export const PriceCard = styled.p`
    line-height: 17px;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary);
`

export const SubtotalContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    margin-top: 16px;
    & p {        
        margin: 0;

        &:nth-child(2){
            color: var(--primary);
        }
    }
`