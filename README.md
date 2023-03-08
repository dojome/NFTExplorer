# NFT Explorer

Displays a list of NFTs (Non-Fungible Tokens) of a given address.
![Grid Card]("./screenshots/screenshot_1.png")
![Dialog]("./screenshots/screenshot_2.png")

## Installation

```bash
npm install
```

## Start

- Copy the .env.example to .env
- Put the Alchemy API KEY in .env

```bash
npm start
```

## Technologies

- React
- TailwindCSS
- Alchemy SDK
- react-copy-to-clipboard
- react-modal
- classnames

## Project Structure

- assets (Include all the assets like images)
- components (Include all the common and individual components like button, card, and dialog)
- containers (Include all the containers like NavBar)
- hooks (Include all the custom hooks like useAccountNfts)
- pages (Include all the pages like Home)
- utils (Include helpers and constants)

## Requirements

- The list of NFTs should be displayed as a grid of cards, with each card displaying the
  NFT's details.

- When a user clicks on a card, a modal should be displayed that shows more details
  about the NFT, such as its description and the owner's address.

- The modal should have a button that allows the user to purchase the NFT. Clicking
  the button should navigate them to the relevant OpenSea page.

## What have you done

- Got all NFTs of a given address using alchemy SDK.
- Defined the custom hook(useAccountNFTs) to get all nfts.
- Displayed NFT details using Card component.
- Displayed NFT more details using Dialog by clicking Card.
- Navigate the relevant OpenSea Page by clicking the "Purchase" button on the dialog.
- Copy the address of token and owner by clicking
- Added hover animation effect when you hover each card.

## Self Evaluation :)

- Correctness - 100%
- Code Quality - 100%
- User Experience- 100%
