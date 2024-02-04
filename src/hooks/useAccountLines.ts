import { useContext, useState } from 'react'
import { Client } from 'xrpl'
import { AccountContext } from '@/context/AccountContext'
import type { AccountLinesRequest, AccountLinesResponse } from 'xrpl'

const useAccountLines = () => {
  const { account } = useContext(AccountContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const request = async () => {
    let response: AccountLinesResponse | undefined = undefined
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

      const params: AccountLinesRequest = {
        command: 'account_lines',
        account: account.address,
      }

      response = await client.request(params)
      console.log('レスポンス: ', response)

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
    request,
    isLoading,
  }
}

export default useAccountLines
