//https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@200..900&display=swap

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            as="style"
            href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@200..900&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@200..900&display=swap"
            rel="stylesheet"
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Lexend+Exa:wght@200..900&display=swap"
              rel="stylesheet"
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
