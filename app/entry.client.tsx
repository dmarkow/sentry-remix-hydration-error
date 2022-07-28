import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";
import { useLocation, useMatches } from "@remix-run/react";
import * as Sentry from "@sentry/remix";
import { useEffect } from "react";

Sentry.init({
  dsn: "__DSN__",
  tracesSampleRate: 1,
  integrations: [
    new Sentry.BrowserTracing({
        routingInstrumentation: Sentry.remixRouterInstrumentation(
            useEffect,
            useLocation,
            useMatches,
        ),
    }),
  ]
});


hydrate(<RemixBrowser />, document);
