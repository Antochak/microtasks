import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType

}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
                <BanknotesColor color={props.money.banknotes === 'Dollars' ? 'green' : 'pink'}>
                    {props.money.banknotes}
                </BanknotesColor>
         </>
    );
};
const BanknotesColor = styled.div`
     background-color: ${props => {
    if(props.color==='green'){
          return 'green;'
       }else{
           return 'pink;'
       }
    }} 
    width: 300px;
    height: 150px;
    margin: 10px;
`

// // const BanknoteRed = styled.div`
// //   background-color: palevioletred;
// //   width: 400px;
// //   height: 200px;
// //   margin: 10px;
// // `

// // const Value = styled.div`
// //   //display: flex;
// //   justify-content: center;
// // `