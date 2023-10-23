import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/autonomous_learning.png" />
    </Head>
  );
}
