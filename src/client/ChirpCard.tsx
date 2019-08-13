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
                    <h4 className="card-title mb-3">{props.chirp.name}</h4>
                    <h5 className="card-text">Says: {props.chirp.chirp}</h5>
                    <p className="card-text mb-4">Sent from: {props.chirp.location}</p>
                    <Link to={`/${props.chirp.id}/edit`} className="btn btn-edit shadow-sm">Edit Your Chirp</Link>
                </div>
            </div>
        </article>
    )
}

export default ChirpCard;