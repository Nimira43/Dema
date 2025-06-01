import React from 'react'
import { useState } from 'react'
import { useActions } from '../hooks/useActions'

const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    searchRepositories(term) as any
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
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


