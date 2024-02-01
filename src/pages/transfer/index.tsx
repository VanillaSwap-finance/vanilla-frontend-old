import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Layout from '@/components/Layout'
import TransferView from '@/views/Transfer'

const Transfer: NextPageWithLayout = () => {
  return <TransferView />
}

Transfer.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Transfer
