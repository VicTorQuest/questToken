const main = async ()=> {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await hre.ethers.provider.getBalance(deployer);
    
    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account Balance ", accountBalance.toString());

    const initialSupply = 1000000; // 1,000,000 tokens
    const questTokenContractFactory = await hre.ethers.getContractFactory("QuestToken");
    const questTokenContract = await questTokenContractFactory.deploy(initialSupply);

    await questTokenContract.waitForDeployment();
    console.log("Contract deployed to:", questTokenContract.target);
}



const runMain = async ()=> {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

runMain();