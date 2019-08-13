import * as React from 'react';
import { useState, useEffect } from 'react';
import ChirpCard from './ChirpCard';
import Navbar from './Navbar';

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
        <Navbar />

        <section className="row m-3 justify-content-center">
            <div className="col-9 d-flex justify-content-center">
                <h3 className="my-3">Your Chirp Feed</h3>
            </div>
            <div className="col-9">
                {chirps.map(chirp => (
                    <ChirpCard key={chirp.id} chirp={chirp} />
                ))}
            </div>
        </section>
        </>
    );
}

export default Home;