import { computeAddress, isAddress, JsonRpcProvider, SigningKey, Transaction as EvmTransaction } from 'ethers'
import { Client, deriveAddress, isValidAddress } from 'xrpl'
import { ETHEREUM_RPC_URL, XRPL_RPC_URL } from '@/config/constants/chains'
import { decode, encode } from 'ripple-binary-codec'
import { Transaction as XrplTransaction } from 'xrpl/dist/npm/models/transactions/transaction'

export const shortenAddress = (address: string): string => {
  if (address.length <= 12) {
    return address
  }

  const firstSix = address.substring(0, 6)
  const lastSix = address.substring(address.length - 6)
  return `${firstSix}...${lastSix}`
}

export const getCrossChainAddresses = async (address: string) => {
  const publicKey = await getPublicKey(address)
  if (!publicKey) {
    return []
  }

  const addresses = []
  addresses.push({
    chain: 'eth',
    address: computeAddress(`0x${publicKey}`),
  })
  addresses.push({
    chain: 'xrp',
    address: deriveAddress(publicKey),
  })
  return addresses
}

const getPublicKey = async (address: string) => {
  if (isAddress(address)) {
    return getEvmPublicKey(address)
  } else if (isValidAddress(address)) {
    return getXrpPublicKey(address)
  } else {
    return null
  }
}

export const getEvmPublicKey = async (address: string) => {
  const transactionResponse = await fetch(`/api/transfer/evm-transactions?chainId=11155111&address=${address}`)

  const transactions = (await transactionResponse.json()).data
  const provider = new JsonRpcProvider(ETHEREUM_RPC_URL)
  for (const transaction of transactions) {
    const tx = await provider.getTransaction(transaction.hash)
    if (!tx || tx.from !== address) {
      continue
    }

    const txObj = EvmTransaction.from(tx)
    if (!txObj.fromPublicKey) {
      continue
    }
    return SigningKey.computePublicKey(txObj.fromPublicKey).slice(2) ?? null
  }
  return null
}

export const getXrpPublicKey = async (address: string) => {
  const client = new Client(XRPL_RPC_URL)
  await client.connect()

  const transactions = await client.request({
    command: 'account_tx',
    account: address,
    ledger_index_min: -1,
    ledger_index_max: -1,
    limit: 100,
  })

  for (const transaction of transactions.result.transactions) {
    const tx = transaction.tx
    if (tx && tx.Account === address) {
      const decoded = decode(encode(tx)) as unknown as XrplTransaction
      await client.disconnect()

      return decoded.SigningPubKey ?? null
    }
  }
  await client.disconnect()
  return null
}
