import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpCard from './ChirpCard';

interface IHomeProps { }

const Home: React.SFC<IHomeProps> = () => {

    const [chirps, setChirps] = useState([]);

    const getChirps = async () => {
        try {
            let r = await fetch('/api/chirps');
            let chirps = await r.json();
            setChirps(chirps);
        } catch (err) {
            console.log(err);
        };
    }

    useEffect(() => { getChirps(); }, []);

    return (
        <>
            <div>
                <h3 className="row m-4 justify-content-center">Your Chirp Feed</h3>
            </div>
            <main className="col">
                <section className="justify-content-center">
                    {chirps.map(chirp => (
                        <ChirpCard key={chirp.id} chirp={chirp} />
                    ))}
                </section>
            </main>
        </>
    );
}

export default Home;