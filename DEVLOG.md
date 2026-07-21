##2026-06-09
datasourceError in prisma.config.ts - solved by turning "exactOptionalPropertyTypes": true, to false
##2026-06-10
prisma db push runs generate automatically
i setup my scripts for db push, dev migration and deploy
##2026-06-11
stop using db push since yiu are going to deploy to a server. use the dev migrate to create the migrations immediately
used ioredis is a Node.js Redis client library .
BullMq requirs the use of ioredis
you must run migration before you can create a prisma config file
##2026-06-12
configured redis to run on my local and set maxRetries to 3
##2026-06-13
set up errorHandlers... appError is a custom error class used to create structured, predictable errors in a Node.js/Express app.
when encountered with datasource error, include the url pointing to the evn db_Url
ensure your dotenv is always imported first in your server
did monolitic modular architecture
separated auth from user as standalone
implement dtos and contracts
typescript doesnt auto remove the password cos i defined safeuser
