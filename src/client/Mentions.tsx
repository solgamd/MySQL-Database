import * as React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export interface MentionsProps { }

const Mentions: React.SFC<MentionsProps> = (props) => {

    const [users, setUsers] = useState<{id: string, name: string}[]>([]);
    const [mentions, setMentions] = useState<{id: string, chirp: string}[]>([]);
    const [selectedUser, setSelectedUser] = useState<string>("");

    const getUsers = async () => {
        try {
            let res = await fetch('/api/users');
            let data = await res.json();
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    };

    const getMentions = async () => {
        try {
            let res = await fetch(`/api/mentions/${selectedUser}`);
            let data = await res.json();
            setMentions(data);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => { getUsers(); }, []);

    return (
        <>
        <Navbar />
        <section className="row mt-5">
            <div className="col-md-8">
                <div className="card m-5 p-3 shadow">
                    <h4 className="card-title d-flex my-2 mb-3">Mentions</h4>
                    <div>
                        <select className="custom-select mb-3"
                        value={selectedUser}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedUser( e.target.value )}>
                            <option>Select a User</option>
                            {users.map(user => {
                                return (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                )
                            })}
                        </select>
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={() => getMentions()}>
                            Get Mentions
                        </button>
                        {mentions.map(mention => {
                            return (
                                <p key={mention.id} >{mention.chirp}</p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Mentions;


