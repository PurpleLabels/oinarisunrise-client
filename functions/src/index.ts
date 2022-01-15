import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const { Nuxt } = require('nuxt');
const express = require('express');

const app = express();
const config = {
    dev: false,
    srcDir: '.nuxt',
    build: {
      publicPath: '/assets/',
    }
  };

const nuxt = new Nuxt(config);
app.use(async (req: any, res: any) => {
  // await nuxt.ready()
  return await nuxt.render(req, res)
})
exports.ssrapp = functions.https.onRequest(app);