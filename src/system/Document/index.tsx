import Head from "next/head";
import { ReactElement, ReactNode } from "react";
interface DocumentProps {
  title?: string;
  children?: ReactNode;
  meta?: ReactElement;
  links?: ReactElement;
}
export default function document({
  children,
  meta,
  title,
  links,
}: DocumentProps) {
  return (
    <>
      <Head>
        <title>Himalayan Trekking-{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {meta && meta}
        <link rel="icon" href="/favicon.ico" />
        {links && links}
      </Head>
      {children}
    </>
  );
}
