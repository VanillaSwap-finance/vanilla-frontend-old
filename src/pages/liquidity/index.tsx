import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import LiquidityView from '@/views/Liquidity'

const Liquidity: NextPageWithLayout = () => {
  return <LiquidityView />
}

Liquidity.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Liquidity
