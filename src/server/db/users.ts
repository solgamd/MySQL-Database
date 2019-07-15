import { Query } from './index';

const getAllUsers = () => Query('SELECT id, name FROM users;');

const findUserByName = (name: string) => Query('CALL spFindUserByName(?)', [name]);

export default {
    getAllUsers,
    findUserByName
}