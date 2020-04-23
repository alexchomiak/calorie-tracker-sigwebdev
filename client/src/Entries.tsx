import React, { FC, useState } from 'react'

import { Entry } from './interfaces/Entry'
import { CalorieEntry } from './CalorieEntry'
interface EntriesProps {
    entries: Entry[]
}

export const Entries: FC<EntriesProps> = ({ entries }) => {
    return (
        <div>
            {entries.map((entry: Entry, index) => (
                <CalorieEntry key={index} entry={entry} />
            ))}
        </div>
    )
}
