import './App.css';
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom'
import Header from './components/pages/Header';
import GetQuestions from './components/quiz/GetQuestions';
import Categories from './components/pages/Categories';
import {Provider} from 'react-redux';
import {store} from './store'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Provider store={store}>
    <Router>
    <Header />
    <Switch>
    <Route exact path='/' component={GetQuestions} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/categories' component={Categories} />
          <Route component={NotFound} />
    </Switch>
  </Router>
  </Provider>
  );
}

export default App;
