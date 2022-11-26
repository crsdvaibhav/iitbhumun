/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>IITBHU MUN</title>
        <meta
          name="description"
          content="Congratulations! We’re very excited that you will be doing Model United Nations for the first time. You are about to embark on a life-changing journey that will help you develop confidence in leading others, a stronger awareness of global issues, and the chance to make new friends from around the world. Model UN is a […"
        />
        <meta property="og:title" content="IITBHU MUN - HOME" />
        <meta
          property="og:description"
          content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
        />
        <meta property="og:url" content="https://iitbhumun.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/Vector-dark.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
