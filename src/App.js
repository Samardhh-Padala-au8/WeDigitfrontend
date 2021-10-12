import './App.css'
import { Switch, Route } from 'react-router-dom'
import Movies from './components/Movies'
import Political from './components/Political'
import Sports from './components/Sports'

const App = () => {
  return (
    <div className='App'>
      <div className='mainheading'>
        <p>Newspedia</p>
      </div>
      <Switch>
        <Route exact path='/' component={Political} />
        <Route exact path='/movies' component={Movies} />
        <Route exact path='/sports' component={Sports} />
      </Switch>
    </div>
  )
}

export default App
