import * as React from 'react';
import { Link } from 'react-router-dom';

interface IChirpCardProps {
    chirp: {
        name: string, 
        id: string,
        userid: number,
        chirp: string,
        location: string
    }
}

const ChirpCard: React.SFC<IChirpCardProps> = props => {
    
    return (
        <article className="col-8 offset-2">
            <div className="card m-1 shadow">
                <div className="card-body">
                    <h4 className="card-title">{props.chirp.name}</h4>
                    <p className="card-text">Says: {props.chirp.chirp}</p>
                    <p className="card-text">Sent from: {props.chirp.location}</p>
                    <Link to={`/${props.chirp.id}/edit`} className="btn btn-edit shadow-sm">Edit Your Chirp</Link>
                </div>
            </div>
        </article>
    )
}

export default ChirpCard;