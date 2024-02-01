import { useContext } from 'react'
import crossmark from '@crossmarkio/sdk'
import { AccountContext } from '@/context/AccountContext'
import { WALLETS } from '@/context/AccountContext'

const useWalletConnect = () => {
  const { setAccount } = useContext(AccountContext)

  const connect = async (walletTag: WALLETS) => {
    switch (walletTag) {
      case WALLETS.CROSSMARK: {
        const { response } = await crossmark.signInAndWait()

        if (response.data.meta.isSuccess) {
        } else if (response.data.meta.isRejected) {
          return
        }

        setAccount({
          address: response.data.address,
          isConnected: true,
          wallet: WALLETS.CROSSMARK,
          network: response.data.network.type,
        })
        break
      }
      default: {
        break
      }
    }
  }

  return {
    connect,
  }
}

export default useWalletConnect
