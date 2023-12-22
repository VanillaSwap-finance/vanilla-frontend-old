import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import PoolView from '@/views/Pool'

const Pool: NextPageWithLayout = () => {
  return <PoolView />
}

Pool.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Pool
