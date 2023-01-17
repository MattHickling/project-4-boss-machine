const express = require('express');
const apiRouter = express.Router();
const ideasRouter = require('./minions');
const minionsRouter = require('./minions');
const meetingsRouter = require('./meetings')

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter)



module.exports = apiRouter;
