import { server } from '../config'
import Head from 'next/head'
import Articlelist from '../components/Articlelist'

export default function Home ({ articles }) {
  return (
    <div>
      <Articlelist articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles,
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     }
//   }
// }

