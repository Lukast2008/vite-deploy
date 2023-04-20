import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

export async function render(pageContext) {
  const appHtml = renderToString(
    <StaticRouter location={pageContext.url}>
      <App />
    </StaticRouter>
  );
  return {
    head: `
      <title>My App</title>
    `,
    html: `
      <div id="root">${appHtml}</div>
    `,
  };
}