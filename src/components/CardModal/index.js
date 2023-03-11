import React, { useMemo } from 'react'
import Modal from 'react-modal'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { openLink, shortWalletAddress } from '../../utils/helpers'
import { MetadataItem } from '../MetadataItem'
import { Button } from '../Button'

export function CardModal({ modalIsOpen, closeModal, nft, address }) {
  const onPurchase = () => {
    openLink(`https://opensea.io/assets/ethereum/${nft?.contract?.address}/${nft?.tokenId}`)
  }

  const owner = useMemo(() => (address?.includes('0x') ? shortWalletAddress(address) : address), [address])

  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      className="Modal"
      overlayClassName="Overlay"
      contentLabel="Example Modal"
    >
      <div className="flex h-full w-full flex-col overflow-hidden bg-slate-700">
        <div className="flex items-center justify-between gap-4 border-b pb-3">
          <div className="text-2xl text-pink-500">{nft?.title || `#${nft?.tokenId}`}</div>
          <div className="flex">
            <Button label="Purchase" onClick={onPurchase} />
          </div>
        </div>
        <div className="no-scrollbar flex h-full flex-col overflow-auto py-4 text-white">
          <CopyToClipboard text={nft?.contract?.address}>
            <span>
              <MetadataItem label="Token Address:" value={shortWalletAddress(nft?.contract?.address)} isCopy={true} />
            </span>
          </CopyToClipboard>
          <MetadataItem label="Token ID:" value={nft?.tokenId} />
          <MetadataItem label="Name:" value={nft?.title} />
          <MetadataItem label="Description:" value={nft?.description} />
          <MetadataItem label="Token Type:" value={nft?.tokenType} />
          <CopyToClipboard text={address}>
            <span>
              <MetadataItem label="Owner:" value={owner} isCopy={true} />
            </span>
          </CopyToClipboard>
        </div>
      </div>
    </Modal>
  )
}
