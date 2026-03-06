import type { VNode } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";

import { HomeRoute } from "./routes/home-route";
import { NotFoundRoute } from "./routes/not-found-route";

export function App(): VNode {
  return (
    <LocationProvider>
      <ErrorBoundary>
        <Router>
          <Route path="/" component={HomeRoute} />
          <Route default component={NotFoundRoute} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  );
}
