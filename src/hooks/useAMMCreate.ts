import { useContext, useState } from 'react'
import { Client } from 'xrpl'
import { AccountContext } from '@/context/AccountContext'
import { getAsset } from '@/utils/asset'
import type { AMMCreate, TxResponse } from 'xrpl'

interface Asset {
  currency: string
  issuer: string
  value: string
}

interface AMMCreateParams {
  address: string
  amount: Asset
  amount2: Asset
  tradingFee: number
}

const TRADING_FEE_MIN = 0
const TRADING_FEE_MAX = 1000
// 0x80000000 (2147483648) 完全に正規である署名を要求します。
const FLAG_FULLY_CANONICAL_SIG = 2147483648

const useAMMCreate = () => {
  const { account } = useContext(AccountContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const submit = async (params: AMMCreateParams): Promise<TxResponse | undefined> => {
    let response: TxResponse | undefined

    try {
      setIsLoading(true)

      if (!account.wss) {
        throw new Error('WebSocket server is not specified.')
      }
      if (params.tradingFee < TRADING_FEE_MIN || params.tradingFee > TRADING_FEE_MAX) {
        throw new Error(`Trading fee must be between ${TRADING_FEE_MIN} and ${TRADING_FEE_MAX}.`)
      }

      const client = new Client(account.wss)
      await client.connect()

      const transaction: AMMCreate = {
        Account: params.address,
        Amount: getAsset(params.amount),
        Amount2: getAsset(params.amount2),
        Flags: FLAG_FULLY_CANONICAL_SIG,
        // Trading fee rate 1 = 0.001%
        TradingFee: params.tradingFee,
        TransactionType: 'AMMCreate',
      }

      response = await client.submitAndWait(transaction, {
        autofill: true,
      })

      client.disconnect()
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      return response
    }
  }

  return {
    submit,
    isLoading,
  }
}

export default useAMMCreate
