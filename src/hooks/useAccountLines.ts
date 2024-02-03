import { useContext, useState } from 'react'
import { Client } from 'xrpl'
import { AccountContext } from '@/context/AccountContext'
import type { AccountLinesRequest, AccountLinesResponse } from 'xrpl'

const useAccountLines = () => {
  const { account } = useContext(AccountContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const request = async (params: AccountLinesRequest) => {
    let response: AccountLinesResponse | undefined = undefined
    setIsLoading(true)

    try {
      if (!account.wss) {
        throw new Error('WebSocket server is not specified.')
      }

      const client = new Client(account.wss)
      await client.connect()

      response = await client.request(params)

      client.disconnect()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error)
      } else {
        console.error('An unknown error occurred.')
      }
    } finally {
      setIsLoading(false)
      return response
    }
  }

  return {
    request,
    isLoading,
  }
}

export default useAccountLines
