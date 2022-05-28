import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components'

import UserContext from '../contexts/UserContext';
import Loader from '../shared/Loader';

function HabitsList(props) {

    const { dayss } = props
    const [dayHabits, setDaysHabits] = useState(dayss)
    const { habits } = useContext(UserContext)

    if (habits.length === null) return <Loader />
    


    return (
        <>
            {
                habits.map((i, key) =>
                    <HabitList>
                        <h2>{i.name}</h2>
                        <HabitDays>
                            {
                                dayss.map((j, keyy) =>
                                    <HabitDay keyy={keyy} habits={i} >
                                        <p>{j.day}</p>
                                    </HabitDay>
                                )
                            }

                        </HabitDays>
                    </HabitList>
                )
            }
        </>

    )
}

function color(keyy, habits) {
    for (let i = 0; i < habits.days.length; i++) {
        if (habits.days[i] === keyy) return "#fff"
    }
    return "#DBDBDB"
}

function background(keyy, habits) {
    for (let i = 0; i < habits.days.length; i++) {
        if (habits.days[i] === keyy) return "#DBDBDB"
    }
    return "#fff"
}

const HabitList = styled.div` 
    /* width: 20em; */
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin: 20px 15px;
    position: relative;

    h2 {
        font-family: 'Lexend Deca';
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        padding-top: 15px;
        margin-left: 15px;
    }
`

const HabitDays = styled.div` 
    margin-left: 15px;
    display: flex;
    margin-top: 10px;

`

const HabitDay = styled.div` 
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    background: ${({ keyy, habits }) => background( keyy, habits)};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    

    p {
        font-family: 'Lexend Deca';
        font-size: 20px;
        color: ${({ keyy, habits }) => color( keyy, habits)};
    }
`



export default HabitsList