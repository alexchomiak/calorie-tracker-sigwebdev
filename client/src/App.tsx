import React, { useState, useEffect } from 'react'
import './App.css'
import { CalorieForm } from './CalorieForm'
import { Entry } from './interfaces/Entry'
import { Entries } from './Entries'

function App() {
    const [entryFormShown, setEntryFormShown] = useState(false)
    const [entries, setEntries] = useState<Entry[]>([])
    const [db, setDB] = useState<IDBDatabase | null>(null)
    useEffect(() => {
        if (entries.length == 0) {
            if (window.localStorage.getItem('entries')) {
                console.log(window.localStorage.getItem('entries'))
                setEntries(JSON.parse(window.localStorage['entries']))
            }
        } else {
            window.localStorage.setItem('entries', JSON.stringify(entries))
        }
    }, [entries])

    return (
        <div className="App">
            <h1>Calorie Tracking App</h1>
            {entryFormShown && (
                <CalorieForm
                    submitEntry={(entry: Entry) => {
                        // * Hide form
                        setEntryFormShown(false)
                        setEntries([...entries, entry])
                    }}
                />
            )}

            <button disabled={entryFormShown} onClick={() => setEntryFormShown(!entryFormShown)}>
                Add Entry
            </button>

            <Entries entries={entries} />
        </div>
    )
}

export default App
