import { Query } from './index';

const getUserMentions = (userid: string) => Query('CALL spGetMentions(?);', [userid]);

export default {
    getUserMentions
}