import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');

const one = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);

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