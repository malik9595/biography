import Head from "next/head";
import Link from "next/link";
import { pagesLinks } from "./(folders)/data.js";

const page = () => {
  return (
    <>
      <Head>
        <title>Hello Biography site</title>
      </Head>
      <div className="container">
        {pagesLinks.map((link) => (
          <>
            <div className="card" key={link.url}>
              <Link href={`${link.url}`}>{link.name}</Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default page;
