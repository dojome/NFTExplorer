export const shortWalletAddress = walletAddress => {
  return walletAddress ? walletAddress.substring(0, 5) + '...' + walletAddress.substring(walletAddress.length - 4) : ''
}

export const openLink = url => {
  window.open(url, '_blank')
}
