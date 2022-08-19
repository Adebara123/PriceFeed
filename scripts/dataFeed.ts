import { ethers } from "hardhat";

async function main() {

  const PriceFeed = await ethers.getContractFactory("PriceConsumerV3");
  const pricefeed = await PriceFeed.deploy();

  await pricefeed.deployed();

  console.log(`Your result is ${pricefeed.address}`);

  const price = await pricefeed.getLatestPrice();

  console.log("The price ", price);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
