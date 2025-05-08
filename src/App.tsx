import { Provider } from 'react-redux'
import { store } from './state'
import RepositoriesList from './components/RepositoriesList'

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Dema</h1>
        <hr />
        <h4>Search for a NPM Package:</h4>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
