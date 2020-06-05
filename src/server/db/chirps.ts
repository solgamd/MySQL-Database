import { Query } from './index';

const all = async () => Query('SELECT users.name, chirps.* FROM chirps JOIN users ON users.id = chirps.userid ORDER BY _created DESC');

const one = async (id: string) => Query('SELECT users.name, chirps.* FROM chirps JOIN users ON users.id = chirps.userid WHERE userid = ?', [id]);

const post = async (userid: string, chirp: string, location: string) => {
    return Query('INSERT INTO chirps (userid, chirp, location) value (?)', [userid, chirp,location])
};

const remove = async (id: string) => Query('DELETE FROM chirps WHERE id = ?', [id]);

const update = async (id: string, chirp: string) => {
    return Query('UPDATE chirps SET chirp = ? WHERE id = ' + id + '', [chirp])
};


export default {
    all,
    one,
    post,
    remove,
    update
}