import type { ReactElement } from 'react'
import type { NextPageWithLayout } from '@/pages/_app'
import Header from '@/components/Layout/Header'
import SwapView from '@/views/Swap'

const Swap: NextPageWithLayout = () => {
  return <SwapView />
}

Swap.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header />
      {page}
    </>
  )
}

export default Swap
