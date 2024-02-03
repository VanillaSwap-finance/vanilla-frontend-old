export const getAsset = (param: { currency: string; issuer: string; value: string }) => {
  if (param.currency === 'XRP') {
    return param.value
  }

  return {
    currency: param.currency,
    issuer: param.issuer,
    value: param.value,
  }
}
