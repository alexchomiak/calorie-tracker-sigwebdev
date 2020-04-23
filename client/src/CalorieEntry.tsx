import React, { FC } from 'react'
import { Entry } from './interfaces/Entry'

interface CalorieEntryProps {
    entry: Entry
}

export const CalorieEntry: FC<CalorieEntryProps> = ({ entry }) => {
    const { date, food, calorie } = entry

    return <div>{`You ate ${food} on ${date} which was ${calorie} calories.`}</div>
}
