import React from 'react'
import {
  NavContent,
  Link,
  NavLoading,
  NotFoundBoundary,
} from 'react-navi'
import siteMetadata from '../siteMetadata'
import NotFoundPage from './NotFoundPage'
import LoadingIndicator from './LoadingIndicator'
import styles from './BlogLayout.module.css'
import logo from "../assets/logo.png";

interface BlogLayoutProps {
  blogRoot: string
  isViewingIndex: boolean
}

function BlogLayout({ blogRoot, isViewingIndex }: BlogLayoutProps) {
  return (
    // Once hooks are released, `<NavLoading>` will be able to be replaced
    // with the new `useLoadingRoute` hooks.
    <NavLoading>
      {loadingRoute => (
        <div className={styles.container}>
          <LoadingIndicator active={!!loadingRoute} />

          {// Don't show the header on index pages, as it has a special
          // header.
          !isViewingIndex && (
            <header>
              <Link href={blogRoot}><img src={logo} className={styles["logo"]} alt="logo" /></Link>
            </header>
          )}

          <main>
            <NotFoundBoundary render={() => <NotFoundPage />}>
              <NavContent />
            </NotFoundBoundary>
          </main>
        </div>
      )}
    </NavLoading>
  )
}

export default BlogLayout
