import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Route } from 'react-router-dom' //browser router uses html5 history api using push-state and replace-state
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>     {/*replace empty tag with Router tag or could have also created router as a new tag */}
      <Header />
      <main className='py-3'>
        <Container>
        <Route path ='/' component={HomeScreen} exact />
        <Route path ='/product/:id' component={ProductScreen} />
        
        </Container>
      </main>
  
      <Footer />
    </Router>
  )
}

export default App;
