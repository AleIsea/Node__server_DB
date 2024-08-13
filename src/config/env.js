import env from 'dotenv'
import envvar from "env-var"

env.config();

const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}