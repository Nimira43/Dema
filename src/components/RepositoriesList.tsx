import React from 'react'
import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList = () => {
  const [term, setTerm] = useState('')
  const { searchRepositories } = useActions()
  const {data, error, loading} = useTypedSelector((state) => state.repositories)
  
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
        {error && <h3>{error}</h3>}
    </div>
  )
}

export default RepositoriesList


