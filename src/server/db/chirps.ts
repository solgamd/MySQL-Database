import { Query } from './index';

const all = async () => Query('SELECT * FROM chirps');

const one = async (id: number) => Query('SELECT * FROM chirps WHERE id = ?', [id]);

const post = async (chirp: string, userid: number, location: string) => {
    return Query('INSERT INTO chirps (chirp, userid, location) value (?)', [chirp, userid, location])
};

const remove = async (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);



export default {
    all,
    one,
    post,
    remove
}