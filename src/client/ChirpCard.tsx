import * as React from 'react';
import { Link } from 'react-router-dom';

interface IChirpCardProps {
    chirp: {
        id: string,
        name: string, //error: "name"
        userid: number,
        chirp: string,
        location: string
    }
}

const ChirpCard: React.SFC<IChirpCardProps> = props => {
    
    return (
       
        <article className="col-md-9 offset-3">
            <div className="card m-1 shadow">
                <div className="card-body">
                    <h4 className="card-title">{props.chirp.name}</h4>
                    <p className="card-text">Says: {props.chirp.chirp}</p>
                    <p className="card-text">Sent from: {props.chirp.location}</p>
                    <Link to={`/${props.chirp.id}`} className="btn btn-secondary shadow-sm">Change Up Your Chirp</Link>
                </div>
            </div>
        </article>
    )
}

export default ChirpCard;