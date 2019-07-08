import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

interface INewChirpProps extends RouteComponentProps{ }
interface INewChirpState {
    chirps: {
        userid: number,
        chirp: string,
        location: string
    }[],
    userid: number, // for input value
    chirp: string, // for input value
    location: string
}

const NewChirp: React.SFC<INewChirpProps> = props => {

    const [chirpUser, setChirpUser] = useState<string>('');
    const [chirpText, setChirpText] = useState<string>('');
    const [chirpLoc, setChirpLoc] = useState<string>('');

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newPost = { 
            chirp: chirpText,
            userid: chirpUser,
            location: chirpLoc
        }
        try {
            let res = await fetch('/api/chirps/', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(newPost)
            })
        } catch (error) {
            console.log(error);
        };
        props.history.push('/');
    }

    return (
        <section className="row mt-5">
            <div className="col-md-8">
                <div className="card mb-5">
                    <h4 className="card-title d-flex">Write a Chirp</h4>
                    <form className="form-group">
                        <label>User:</label>
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
                        <label>Location:</label>
                        <input
                            className="form-control mb-4"
                            value={chirpLoc}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setChirpLoc(e.target.value)}
                        />
                        <button onClick={(e) => handleSubmit(e)} className="btn btn-primary m-1">Post Your Chirp</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default NewChirp;