import { Query } from './index';

const getUserMentions = (userid: number) => Query('CALL spGetMentions(?);', [userid]);

export default {
    getUserMentions
}