import React from "react";
import {FilterType, MoneyType} from "./money";


type NewMoneyType = {
    filterMoney: (filter: FilterType)=> void
    currentMoney: MoneyType[]
    deleteBanknote: (numberId: string)=>void
}
export const NewMoney =(props: NewMoneyType)=> {
    return (

    <>
        <ul>
            {props.currentMoney.map((paper, index) => <li key={index}>
                <span>{paper.banknote}</span>
                <span>{paper.value}</span>
                <span>{paper.numberId}</span>
                <button onClick={()=>props.deleteBanknote(paper.numberId)}>Delete</button>
            </li>)}
        </ul>
        <button onClick={()=>props.filterMoney('Rubles')}> Rubles </button>
        <button onClick={()=>props.filterMoney('Dollars')}> Dollars </button>


    </>
    )
}
