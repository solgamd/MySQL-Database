import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export interface EditChirpProps extends RouteComponentProps<{ id: string }>{ }

const EditChirp: React.SFC<EditChirpProps> = props => {

    const [ newText, setText ] = useState<string>();       
    const [ userName, setUserName ] = useState<string>();   

    const getChirp = async () => {
        let id = props.match.params.id;
        
        try {
            let res = await fetch(`/api/chirps/${id}`);
            let data = await res.json();
            setText(data.chirp);
            setUserName(data.name);
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault;
        let id = props.match.params.id;

        let updatedChirp = {
                chirp: newText
        };
        try {
            let res = await fetch(`/api/chirps/${id}`, { 
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(updatedChirp) 
            });
        } catch (error) {
            console.log(error);
        };
        this.props.history.push('/');
    }

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault;
        let id = props.match.params.id;
        try {
            let res = await fetch(`/api/chirps/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json'},
            });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        };
        
    }

    useEffect(() => { getChirp(); }, [props.match.params.id])

    return (
        <>
        <section className="row">
            <article className="col-md-6 offset-3">
                <div className="card m-1 mt-5 shadow">
                    <div className="card-body">
                        <h4 className="card-title mb-2">Your Chirp</h4>
                        <form action="" className="form-group">
                            <label>Username:</label>
                            <p>{userName}</p>
                            <label>Chirp:</label>
                            <input
                                className="form-control"
                                value={newText}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                            />
                            <button onClick={e => handleUpdate(e)} className="btn mr-1 my-2">Update Chirp</button>
                            <button onClick={e => handleDelete(e)} className="btn btn-delete ml-2 my-2">Delete Chirp</button>
                        </form>
                    </div>
                </div>
            </article>
        </section>
        </>
      );
}
 
export default EditChirp;