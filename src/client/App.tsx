import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/app';
import Home from './Home';
import ChirpCard from './ChirpCard';
import NewChirp from './NewChirp';


interface IAppProps { }

const App: React.SFC<IAppProps> = () => {

    return (
        <Router>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id" component={ChirpCard} />
                    <Route exact path="/new" component={NewChirp} />
                </Switch>
            </main>
        </Router>
    )
}

export default App;