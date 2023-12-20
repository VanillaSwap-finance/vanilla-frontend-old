import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import SwapView from '@/views/Swap'

const Swap: NextPageWithLayout = () => {
  return <SwapView />
}

Swap.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Swap
