import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import HomeView from '@/views/Home'

const Home: NextPageWithLayout = () => {
  return <HomeView />
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
