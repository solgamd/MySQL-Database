import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useState, useEffect } from 'react';

export interface EditChirpProps extends RouteComponentProps<{ id: string }>{
}

const EditChirp: React.SFC<EditChirpProps> = (props) => {

    const [ newText, setText ] = useState<string>(); //need the original chirp text as placeholder
    const [ userName, setUserName ] = useState<string>();

    const getChirp = async () => {
        let id = props.match.params.id;
        try {
            let res = await fetch(`/api/chirps/${id}`);
            let chirp = await res.json();
            setText(chirp.chirp);
            setUserName(chirp.name);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { getChirp(); }, [])

    return (
        <section className="row">
            <article className="col-md-6 offset-3">
                <div className="card m-1">
                    <div className="card-body">
                        <h4 className="card-title">Your Chirp</h4>
                        <form action="" className="form-group">
                            <label>Username:</label>
                            <p>{userName}</p>
                            <label>Chirp:</label>
                            <input
                                className="form-control"
                                value={newText}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                            />
                        </form>
                    </div>
                </div>
            </article>
        </section>
      );
}
 
export default EditChirp;