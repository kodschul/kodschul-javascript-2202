# Umsetzung von Webseiten im Single-Page-Stil

Die Umsetzung von Webseiten im Single-Page-Stil (SPA) ist ein Ansatz in der Webentwicklung, bei dem alle Inhalte und Ressourcen einer Website in einer einzigen HTML-Seite geladen werden. JavaScript wird verwendet, um dynamische Inhalte nach Bedarf zu laden und anzuzeigen, anstatt separate Seiten vom Server abzurufen.

## Verwendung von Frameworks

Um SPAs zu entwickeln, werden oft JavaScript-Frameworks wie React, Angular oder Vue.js verwendet, die die Entwicklung vereinfachen und eine strukturierte Organisation des Codes ermöglichen.

### Beispiel (React):

```jsx
// React Single-Page-App
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { page: 'home' };
  }

  render() {
    return (
      <div>
        {this.state.page === 'home' && <HomePage />}
        {this.state.page === 'about' && <AboutPage />}
        {this.state.page === 'contact' && <ContactPage />}
      </div>
    );
  }
}

const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;

ReactDOM.render(<App />, document.getElementById('root'));
```

## Routing

Routing ist ein wichtiger Aspekt bei der Entwicklung von SPAs. Es ermöglicht die Navigation zwischen verschiedenen Abschnitten der Website, ohne die Seite neu zu laden.

```jsx
// React Router in einer Single-Page-App
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
    </div>
  </Router>
);

const HomePage = () => <div>Home Page</div>;
const AboutPage = () => <div>About Page</div>;
const ContactPage = () => <div>Contact Page</div>;

ReactDOM.render(<App />, document.getElementById('root'));
```

## Zustandsverwaltung

Da SPAs einen großen Teil der Anwendungslogik auf der Clientseite haben, ist eine effiziente Verwaltung des Anwendungsstatus wichtig. Zustandsverwaltungsbibliotheken wie Redux oder Vuex werden häufig verwendet, um den Zustand der Anwendung zentral zu verwalten.

```jsx
// Redux in einer Single-Page-App
import { createStore } from 'redux';

// Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Store
const store = createStore(counterReducer);

// Actions
const incrementAction = () => ({ type: 'INCREMENT' });
const decrementAction = () => ({ type: 'DECREMENT' });

// Dispatching actions
store.dispatch(incrementAction());
store.dispatch(decrementAction());

// Getting current state
console.log(store.getState()); // Output: 0
```