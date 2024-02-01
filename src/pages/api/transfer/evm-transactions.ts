import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { chainId, address } = req.query
  if (!chainId) {
    res.status(400).json({ error: 'Missing chainId' })
    return
  }
  if (Array.isArray(chainId)) {
    res.status(400).json({ error: 'chainId must be a string' })
    return
  }
  if (!address) {
    res.status(400).json({ error: 'Missing address' })
    return
  }
  if (!process.env.ETHERSCAN_API_KEY) {
    res.status(500).json({ error: 'Missing ETHERSCAN_API_KEY' })
    return
  }

  let domain
  switch (chainId) {
    case '1':
      domain = 'https://api.etherscan.io'
      break
    case '11155111':
      domain = 'https://api-sepolia.etherscan.io'
      break
    default:
      res.status(400).json({ error: 'Invalid chainId' })
      return
  }

  const response = await fetch(
    path.join(
      domain,
      `api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=${process.env.ETHERSCAN_API_KEY}`,
    ),
  )
  const data = await response.json()
  res.status(200).json({ data: data.result })
}
