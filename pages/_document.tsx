import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Link href="/">
          <h1>Datadog Next.js Prime Finder</h1>
        </Link>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
