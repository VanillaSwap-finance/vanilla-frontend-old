export const shortenAddress = (address: string): string => {
  if (address.length <= 12) {
    return address
  }

  const firstSix = address.substring(0, 6)
  const lastSix = address.substring(address.length - 6)
  return `${firstSix}...${lastSix}`
}
