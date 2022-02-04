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

/* Modal styles */
export const Modal = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    
`
export const PopupModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 24px;
    background: #F2F2F2;
    border-radius: 20px;
    width: 90%;
    height: 399px;

`

export const ImageModal = styled.img`
    width: 67px;
    align-self: center; 
`
export const DescriptionItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    & h1{
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
    }

    & p{
        font-weight: 600;
        font-size: 1.2rem;
        color: var(--primary);
    }

`

export const BtnUpdate = styled.div`
    font-weight: 600;
    font-size: 1.4rem;
    width: 190px;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;

    & button{
        background-color: #FFFFFF;
        border: none;
    }
`

export const BtnConfirm = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: var(--primary);
    color: white;
    margin: 26px 0px;
    border: none;
    width: 100%;
    height: 45px;
    text-align: center;
    
`
export const BtnClose = styled.button`
    border: none;
    align-self: center;
    color: var(--primary);
    font-weight: 600;
    font-size: 1.1rem;
    background: none;
    margin: 0;
`