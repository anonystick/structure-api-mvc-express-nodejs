const client = require('../databases/init.mongodb')
const { promisify } = require("util")

const REDIS_GET = promisify(client.get).bind(client);
const REDIS_SET = promisify(client.set).bind(client);
const REDIS_LRANGE = promisify(client.lrange).bind(client);


module.exports = {
    REDIS_GET,
    REDIS_SET,
    REDIS_LRANGE
}