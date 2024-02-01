import { useContext } from 'react'
import { Button } from '@mui/material'
import { AccountContext } from '@/context/AccountContext'

interface ChangeNetworkButtonProps {}

const ChangeNetworkButton: React.FC<ChangeNetworkButtonProps> = () => {
  const { account } = useContext(AccountContext)

  return (
    <>
      <Button color="inherit">{account.network}</Button>
    </>
  )
}

export default ChangeNetworkButton
