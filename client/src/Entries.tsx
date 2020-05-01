import React, { FC, useState, useEffect } from 'react'

import { Entry } from './interfaces/Entry'
import { CalorieEntry } from './CalorieEntry'
interface EntriesProps {
    entries: Entry[]
}

export const Entries: FC<EntriesProps> = ({ entries }) => {
    const [filter, setFilter] = useState<string>('')

    // * Filter Items by food
    if (filter.length > 0) {
        entries = entries.filter(item => {
            return (
                item.food.toLowerCase().includes(filter.toLowerCase()) ||
                item.date.toLowerCase().includes(filter.toLowerCase())
            )
        })
    }

    return (
        <div>
            <div>
                <input type="text" onChange={e => setFilter(e.target.value)} value={filter} />
            </div>
            <div>
                <h3>
                    {filter.length > 0 &&
                        `There ${entries.length === 1 ? 'is' : 'are'} ${entries.length} ${
                            entries.length === 1 ? 'entry' : 'entries'
                        } that match this filter that total an amount of ${entries.reduce(
                            (reduced: number, curr) => reduced + curr.calorie,
                            0
                        )} calories`}
                </h3>
            </div>
            {entries.map((entry: Entry, index) => (
                <CalorieEntry key={index} entry={entry} />
            ))}
        </div>
    )
}
