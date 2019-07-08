import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpCard from './ChirpCard';
import { Link } from 'react-router-dom';

interface IHomeProps { }
interface IHomeState {
    chirps: {
        user: string,
        text: string,
        id: string
    }[],
}

const Home: React.SFC<IHomeState> = () => {

    const [chirps, setChirps] = useState([]); 
 
    const getChirps = async () => {
        try {
            let r = await fetch('/api/chirps');
            let chirps = await r.json();
            chirps.reverse();
            setChirps(chirps);
        } catch (err) {
            console.log(err);
        };
    }

    useEffect(() => { getChirps(); }, []);

    return (
        <>
        <Link to="/new" className="btn btn-primary shadow-sm ">Write A Chirp</Link> 
        <section className="row m-3 justify-content-center">
            <div className="col-12 d-flex justify-content-center">
                <h1>Chirps Feed</h1>
            </div>
            <div className="col-8">
                {chirps.map(chirp => (
                    <ChirpCard key={chirp.id} chirp={chirp} />
                ))}
            </div>
        </section>
        </>
    );
}

export default Home;