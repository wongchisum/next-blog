import React, { PropsWithChildren } from 'react'
import style from './styles.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Tag: React.FC<PropsWithChildren> = props => {
  return (
    <span className="inline-block rounded border bg-amber-500/10 text-amber-900 border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-500 px-2 py-1 text-xs leading-none">
      {props.children}
    </span>
  )
}
const Index: NextPageWithCustomProps = () => {
  return (
    <div className={classNames('container py-12', style.about)}>
      <h2>关于本站</h2>
      <p>//Todo</p>
      <h2>关于我</h2>
      <p>//Todo</p>
      <h2>找到我</h2>
      <ul>
        <li>
          Email - <Link href="mailto:im.wongch1sum@gmail.com">邮箱</Link>
        </li>
        <li>
          Github -{' '}
          <Link href="https://github.com/wongchisum" target="_blank">
            Github
          </Link>
        </li>
        <li>
          Podcast(Anchor) -{' '}
          <Link href="https://anchor.fm/wongchisum" target="_blank">
            随性电台
          </Link>
        </li>
        <li>
          Google(播客) -{' '}
          <Link
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9hY2M0Mjg5OC9wb2RjYXN0L3Jzcw?hl=zh-TW"
            target="_blank"
          >
            随性电台
          </Link>
        </li>
      </ul>
      <h2>致谢</h2>
      本站素材相关
      <ul>
        <li>
          <Link href="https://github.com/imzxj/next-blog-starter" target="_blank">
            博客Fork来源
          </Link>
        </li>
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  }
}

export default Index
