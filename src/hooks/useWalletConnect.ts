import { useContext } from 'react'
import crossmark from '@crossmarkio/sdk'
import { AccountContext } from '@/context/AccountContext'

export enum WALLET_TAG {
  CROSSMARK = 'CROSSMARK',
}

const useWalletConnect = () => {
  const { setAccount } = useContext(AccountContext)

  const connect = async (walletTag: WALLET_TAG) => {
    switch (walletTag) {
      case WALLET_TAG.CROSSMARK: {
        const { response } = await crossmark.signInAndWait()

        if (response.data.meta.isSuccess) {
        } else if (response.data.meta.isRejected) {
          return
        }

        setAccount({
          address: response.data.address,
          isConnected: true,
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
