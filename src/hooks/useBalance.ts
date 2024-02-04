import { useContext, useState } from 'react'
import { Client } from 'xrpl'
import { AccountContext } from '@/context/AccountContext'

const useBalance = () => {
  const { account } = useContext(AccountContext)
  const [data, setData] = useState<{ currency: string; issuer: string | undefined; value: string }[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const request = async () => {
    setIsLoading(true)

    try {
      if (!account.address) {
        throw new Error('Account address is not specified.')
      }
      if (!account.wss) {
        throw new Error('WebSocket server is not specified.')
      }

      const client = new Client(account.wss)
      await client.connect()

      const response = await client.getBalances(account.address)
      const balances = response
        .filter((data) => data.value !== '0')
        .map((data) => {
          return {
            currency: data.currency,
            issuer: data.currency === 'XRP' ? '' : data.issuer,
            value: data.value,
          }
        })

      setData(balances)

      client.disconnect()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error)
      } else {
        console.error('An unknown error occurred.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return {
    data,
    request,
    isLoading,
  }
}

export default useBalance
