
const { ethers } = require('hardhat')

const main = async () => {
  const Web3DatingFactory = await ethers.getContractFactory('Web3DatingERC721')
  const Web3DatingContract = await Web3DatingFactory.deploy()

  console.log('WEB3DATING CONTRACT ADDRESS:', Web3DatingContract.address)
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log('Error in deploying Contract >> ', error)
    process.exit(1)
  })
