import { useCallback, useEffect, useState } from 'react'
import { Network, Alchemy } from 'alchemy-sdk'
import { ALCHEMY_API_KEY } from '../utils/constants'

export const useAccountNFTs = address => {
  const [nfts, setNfts] = useState(null)
  const [error, setError] = useState('')
  const [loading, setloading] = useState(false)
  const fetchNFT = useCallback(() => {
    setloading(true)
    const settings = {
      apiKey: ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
      network: Network.ETH_MAINNET, // Replace with your network.
    }

    const alchemy = new Alchemy(settings)

    // Print all NFTs returned in the response:
    alchemy.nft
      .getNftsForOwner(address)
      .then(res => {
        setNfts(res?.ownedNfts)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setloading(false)
      })
  }, [address])
  useEffect(() => {
    setNfts(null)
    setError('')
    if (address) fetchNFT()
  }, [address, fetchNFT])
  return [nfts, loading, error]
}
