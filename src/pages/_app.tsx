import '@/styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Lato } from 'next/font/google'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../../next-seo.config'
import { AccountProvider } from '@/context/AccountContext'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'block',
})

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const theme = createTheme({
    typography: {
      fontFamily: lato.style.fontFamily,
    },
  })

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <AccountProvider>{getLayout(<Component {...pageProps} />)}</AccountProvider>
      </ThemeProvider>
    </>
  )
}
