import type { VNode } from "preact";

export function NotFoundRoute(): VNode {
  return (
    <header>
      <hgroup>
        <h1>404</h1>
        <p>Page Not Found</p>
      </hgroup>
    </header>
  );
}
