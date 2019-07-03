import { Query } from './index';

const all = async () => Query('SELECT users.name, chirps.* FROM chirps JOIN users ON users.id = chirps.userid');

const one = async (id: number) => Query('SELECT users.name, chirps.* FROM chirps JOIN users ON users.id = chirps.userid WHERE id = ?', [id]);

const post = async (chirp: string, userid: number, location: string) => {
    return Query('INSERT INTO chirps (chirp, userid, location) value (?)', [chirp, userid, location])
};

const remove = async (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);

const update = async (id: number, chirp: string) => {
    return Query('UPDATE chirps SET chirp = ? WHERE id = ' + id + '', [chirp])
};


export default {
    all,
    one,
    post,
    remove,
    update
}