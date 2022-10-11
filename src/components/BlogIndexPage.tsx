import { Route } from "navi";
import React from "react";
import { Link } from "react-navi";
import siteMetadata from "../siteMetadata";
import ArticleSummary from "./ArticleSummary";
import Bio from "./Bio";
import Pagination from "./Pagination";
import styles from "./BlogIndexPage.module.css";
import logo from "../assets/logo.png";

interface BlogIndexPageProps {
  blogRoot: string;
  pageCount: number;
  pageNumber: number;
  postRoutes: Route[];
}

function BlogIndexPage({
  blogRoot: blogRoot,
  pageCount,
  pageNumber,
  postRoutes
}: BlogIndexPageProps) {
  return (
    <div>
      <header>
        <div>
          <img src={logo} className={styles["logo"]} alt="logo" />
        </div>
        <h3 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h3>
        <Bio />
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route => (
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      )}
      <footer className={styles.footer}>
        <div>
          <a href="./rss.xml" target="_blank" style={{ float: "right" }}>
            RSS
          </a>
          <Link target="_blank" href="https://www.linkedin.com/in/antonia-nicolaou-527721a2/">linkedin</Link> &bull;{" "}
          <Link target="_blank" href="https://twitter.com/AntwniaNicolaou">twitter</Link> &bull;{" "}
          <Link target="_blank" href="https://github.com/nicolaouantonia/">github</Link> &bull;{" "}
          <Link href="./tags">Tags</Link> &bull;{" "}
        </div>
      </footer>
    </div>
  );
}

export default BlogIndexPage;
