import { useState } from 'react'
import { SearchBox, Card, CardModal, Loading } from '../../components'
import { NavBar } from '../../containers'
import { useAccountNFTs } from '../../hooks/useAccountNFTs'

export function Home() {
  const [isOpen, setOpen] = useState(false)
  const [searchAddress, setSearchAddress] = useState('')
  const [nfts, loading, error] = useAccountNFTs(searchAddress)
  const [selectedNft, setSelectedNft] = useState(null)
  const onClickCard = nft => {
    setSelectedNft(nft)
    setOpen(true)
  }
  const closeModal = () => {
    setSelectedNft(null)
    setOpen(false)
  }
  return (
    <div className="flex min-h-screen flex-col bg-slate-900">
      <NavBar />
      <div className="mt-20 flex flex-col px-5 py-10">
        <div className="flex w-full items-center justify-center">
          <SearchBox
            className="w-full md:w-1/2"
            placeholder="Enter wallet address"
            loading={loading}
            setValue={val => setSearchAddress(val)}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="flex items-center justify-center">
            {error ? (
              <div className="my-10 text-center text-lg text-red-500"> {error.message.slice(5)}</div>
            ) : !!nfts?.length ? (
              <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {nfts.map((item, index) => (
                  <Card onClick={() => onClickCard(item)} nft={item} key={index} />
                ))}
              </div>
            ) : searchAddress ? (
              <div className="my-10 text-center text-2xl text-pink-500">No NFTs Found!</div>
            ) : (
              ''
            )}
          </div>
        )}
      </div>
      {selectedNft && (
        <CardModal modalIsOpen={isOpen} closeModal={closeModal} nft={selectedNft} address={searchAddress} />
      )}
    </div>
  )
}
