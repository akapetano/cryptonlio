import Head from 'next/head';

interface INextHeadProps {
  title: string;
  metaDescription: string;
}

export const NextHead = ({ title, metaDescription }: INextHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
