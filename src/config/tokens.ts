interface Token {
  id: number
  name: string
  currency: string
  src: string
  issuer?: string
}

const TOKENS: Token[] = [
  {
    id: 1,
    name: 'XRP',
    currency: 'XRP',
    src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
  },
  {
    id: 2,
    name: 'Bitcoin',
    currency: 'BTC',
    src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  },
  {
    id: 3,
    name: 'Ethereum',
    currency: 'ETH',
    src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  },
  {
    id: 4,
    name: 'Binance Coin',
    currency: 'BNB',
    src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  },
  {
    id: 5,
    name: 'Tether',
    currency: 'USDT',
    src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  },
  {
    id: 6,
    name: 'Cardano',
    currency: 'ADA',
    src: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
  },
]

export default TOKENS
