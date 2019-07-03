import * as React from 'react';
import { useState, useEffect } from 'react';

interface INewChirpProps {}
interface INewChirpState {
    chirps: {
        id: string,
        user: string,
        text: string
    }[],
    user: string, // for input value
    text: string, // for input value
}

const NewChirp: React.SFC<INewChirpState> = () => {

    const [ chirpUser, setChirpUser ] = useState<string>(''); 
    const [ chirpText, setChirpText] = useState<string>('');


    return(
        <section className="row mt-5">
            <div className="col-md-8">
                <div className="card mb-5">
                    <h4 className="card-title d-flex">Write a Chirp</h4>
                    <form action="" className="form-group">
                        <label>Username:</label>
                        <input 
                            className="form-control mb-4"
                            value={chirpUser}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChirpUser(e.target.value)}
                            />
                            <label>Chirp:</label>
                        <input 
                            className="form-control mb-4"
                            value={chirpText}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChirpText(e.target.value)}
                            />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default NewChirp;