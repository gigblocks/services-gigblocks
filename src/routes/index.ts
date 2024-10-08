import { Hono } from 'hono'
import { logger } from 'hono/logger'

import jobs from './jobs.route'
import chat from './chat.route'
import profiles from './profiles.route'
import ens from './ens.route'
import files from './files.route'
import auth from './auth.route'

export const routes = (app: Hono) => {
    app.use('*', logger())

    app.route('/jobs', jobs)
    app.route('/chat', chat)
    app.route('/profiles', profiles)
    app.route('/ens', ens)
    app.route('/files', files)
    app.route('/auth', auth)
}