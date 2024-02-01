import { useState, useContext, useMemo, createContext } from 'react'

interface AccountContextProps {
  children: React.ReactNode
}

export enum WALLETS {
  NO_CONNECTION = 'NO_CONNECTION',
  CROSSMARK = 'CROSSMARK',
}

export interface Account {
  address: string | null
  isConnected: boolean
  wallet: WALLETS
  network?: string | null
}

interface AccountContextType {
  account: Account
  setAccount: (account: Account) => void
}

// Create Context Object
export const AccountContext = createContext<AccountContextType>({
  account: {
    address: null,
    isConnected: false,
    wallet: WALLETS.NO_CONNECTION,
    network: null,
  },
  setAccount: () => {},
})

// Use Context Hook
export const useAccountContext = () => {
  const context = useContext(AccountContext)
  if (!context) {
    throw new Error('useAccountContext must be used within a AccountContextProvider')
  }
  return context
}

// Context Provider
export const AccountProvider = ({ children }: AccountContextProps) => {
  const [account, setAccount] = useState<Account>({
    address: null,
    isConnected: false,
    wallet: WALLETS.NO_CONNECTION,
    network: null,
  })

  const value = useMemo(
    () => ({
      account,
      setAccount,
    }),
    [account, setAccount],
  )

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
}
