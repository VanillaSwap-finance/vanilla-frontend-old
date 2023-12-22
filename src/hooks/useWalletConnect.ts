import crossmark from '@crossmarkio/sdk'

export enum WALLET_TAG {
  CROSSMARK = 'CROSSMARK',
}

const useWalletConnect = () => {
  const connect = async (walletTag: WALLET_TAG) => {
    switch (walletTag) {
      case WALLET_TAG.CROSSMARK: {
        console.log("I'm connecting to Crossmark wallet")
        const response = await crossmark.signInAndWait()
        console.log('response : ', response)
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
