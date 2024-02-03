import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import LiquidityCreateView from '@/views/Liquidity/Create'

const LiquidityCreate: NextPageWithLayout = () => {
  return <LiquidityCreateView />
}

LiquidityCreate.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default LiquidityCreate
