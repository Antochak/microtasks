import React, {useState} from "react";
import {NewMoney} from "./NewMoney";


export type FilterType = 'All' | 'Dollars' | 'Rubles'


export type MoneyType = {
    banknote: string
    value: number
    numberId: string
}

export const MoneyFilter = () => {
    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknote: 'Dollars', value: 100, numberId: ' a1234567890'},
        {banknote: 'Dollars', value: 50, numberId: ' z1234567890'},
        {banknote: 'RUBLS', value: 100, numberId: ' w1234567890'},
        {banknote: 'Dollars', value: 100, numberId: ' e1234567890'},
        {banknote: 'Dollars', value: 50, numberId: ' c1234567890'},
        {banknote: 'RUBLS', value: 100, numberId: ' r1234567890'},
        {banknote: 'Dollars', value: 50, numberId: ' x1234567890'},
        {banknote: 'RUBLS', value: 50, numberId: ' v1234567890'},
    ])


    let currentMoney = money;

    const [filter, setFilter] = useState<FilterType>('All')

    if (filter == 'Rubles') {
        currentMoney = money.filter((ruble) => ruble.banknote == 'RUBLS')
    } else if (filter == 'Dollars') {
        currentMoney = money.filter((ruble) => ruble.banknote == 'Dollars')
    }

    const filterMoney = (filter: FilterType) => {
        setFilter(filter)
    }
    // const DeleteBanknote = (numberId: string) => {
    //     console.log(money)
    //     setMoney(money.filter(paper => paper.numberId !== numberId))
    //
    // }
    return (
        // <NewMoney filterMoney={filterMoney} currentMoney={currentMoney} deleteBanknote={DeleteBanknote}/>
        <>
            <ul>
                {currentMoney.map((paper, index) => <li key={index}>
                    <span>{paper.banknote}</span>
                    <span>{paper.value}</span>
                    <span>{paper.numberId}</span>
                </li>)}
            </ul>
            <button onClick={()=>filterMoney('Rubles')}> Rubles </button>
            <button onClick={()=>filterMoney('Dollars')}> Dollars </button>

        </>
    )
}