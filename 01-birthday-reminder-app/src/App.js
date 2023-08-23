import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const date = new Date()

  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}/${month}/${year}`

  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today </h3>
        <h4>{currentDate}</h4>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App
