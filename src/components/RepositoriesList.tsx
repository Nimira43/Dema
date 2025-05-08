import React from 'react'
import { useState } from 'react'

const RepositoriesList = () => {
  const [term, setTerm] = useState('')

  return (
    <div>
      <form >
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
          <button>Search</button>
        </form>
    </div>
  )
}

export default RepositoriesList


