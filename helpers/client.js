import { Client } from '@hiveio/dhive';

const client = new Client(process.env.BROADCAST_URL || 'https://api.hive.blog');

export default client;
