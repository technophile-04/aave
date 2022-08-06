const { ethers, getNamedAccounts } = require("hardhat")
const { getWeth } = require("../scripts/getweth")

async function main() {
    await getWeth()
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
