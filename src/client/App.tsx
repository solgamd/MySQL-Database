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
                    <Route exact path="/api/chirps" component={Home} />
                    <Route exact path="/api/chirps/:id" component={ChirpCard} />
                    <Route exact path="/api/chirps/new" component={NewChirp} />

                </Switch>
            </main>
        </Router>
    )
}

export default App;