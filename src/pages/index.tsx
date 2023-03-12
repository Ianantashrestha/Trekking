import { Header, Banner, TopDestination, Testimonial } from "@app/components";

import { Document } from "@app/system";

export default function Home() {
  return (
    <Document title="Home">
      <Header />
      <Banner />
      <TopDestination />
      <Testimonial />
    </Document>
  );
}
