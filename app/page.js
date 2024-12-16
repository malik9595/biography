import Head from "next/head";
import Link from "next/link";
import { pagesLinks } from "./data.js";

const page = () => {
  return (
    <>
      <Head>
        <title>Biography site</title>
      </Head>
      <title>Biography from html title</title>
      <div className="container">
        <h2>"Explore the stories that shape lives and legacies. This biography blog dives into the journeys of remarkable individuals from diverse walks of life—leaders, innovators, artists, and everyday heroes. Through compelling narratives, discover their challenges, triumphs, and the impact they've made on the world. Whether seeking inspiration, knowledge, or a glimpse into extraordinary lives, this blog celebrates the resilience and achievements of those who dare to dream and persevere."</h2>
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
