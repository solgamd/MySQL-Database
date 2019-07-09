import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './scss/app';
import Home from './Home';
import ChirpCard from './ChirpCard';
import NewChirp from './NewChirp';
import EditChirp from './EditChirp';


interface IAppProps { }

const App: React.SFC<IAppProps> = () => {

    return (
        <Router>
            <main className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:id/details" component={ChirpCard} />
                    <Route exact path="/new" component={NewChirp} />
                    <Route exact path="/:id/edit" component={EditChirp} />
                </Switch>
            </main>
        </Router>
    )
}

export default App;