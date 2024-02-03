import { useContext, useEffect } from 'react'
import crossmark from '@crossmarkio/sdk'
import { AccountContext } from '@/context/AccountContext'
import { WALLETS } from '@/context/AccountContext'

const useNetworkSwitch = () => {
  const { account, setAccount } = useContext(AccountContext)

  const switchNetworkCrossmark = () => {
    crossmark.on(
      'network-change',
      ({ network }: { network: { protocol: string; type: string; wss: string; rpc: string } }) => {
        setAccount({
          ...account,
          network: network.type,
          wss: network.wss,
          rpc: network.rpc,
        })
      },
    )
  }

  useEffect(() => {
    if (account.wallet === WALLETS.CROSSMARK) {
      switchNetworkCrossmark()
    }
  }, [account])
}

export default useNetworkSwitch
