import React, { FC, useState } from 'react'
import { SingleDatePicker } from 'react-dates'
import moment, { Moment } from 'moment'
import { Entry } from './interfaces/Entry'
interface CalorieFormProps {
    submitEntry(entry: Entry): void
}

export const CalorieForm: FC<CalorieFormProps> = ({ submitEntry }) => {
    const [food, setFood] = useState('')
    const [calories, setCalories] = useState(0)
    const [date, setDate] = useState<Moment | null>(null)
    const [dateFocus, setDateFocus] = useState<boolean | null>(false)

    const passEntryBackUpToApplication = () => {
        if (date != null) {
            const createdEntry: Entry = {
                food,
                calorie: calories,
                date: date.format('dddd, MMMM Do YYYY')
            }
            console.log(date.format('dddd, MMMM Do YYYY, h:mm:ss a'))
            submitEntry(createdEntry)
        }
    }

    return (
        <div className="calorieForm">
            <div>
                <h3>Enter Food:</h3>
                <input
                    type="text"
                    value={food}
                    onChange={function (event) {
                        const input = event.target
                        setFood(input.value)
                    }}
                />
            </div>
            <div>
                <h3>Enter Calories:</h3>
                <input
                    type="number"
                    value={calories}
                    onChange={function (event) {
                        const input = event.target
                        setCalories(parseInt(input.value))
                    }}
                />
            </div>
            <h3>Pick Date:</h3>
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={date => {
                    setDate(date)
                    setDateFocus(false)
                }} // PropTypes.func.isRequired
                onFocusChange={focus => setDateFocus(focus != null ? focus.focused : dateFocus)} // PropTypes.func.isRequired
                showDefaultInputIcon={false}
                focused={dateFocus}
                id="DatePicker" // PropTypes.string.isRequired,
            />
            <div>
                <button onClick={passEntryBackUpToApplication}>Submit Entry</button>
            </div>
        </div>
    )
}
