// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://34d2e09d1aee8f4e35e23a29e1c7c485@o4507848692400128.ingest.us.sentry.io/4507848711274496",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
