const main = async ()=> {
    const questTokenContractFactory = await hre.ethers.getContractFactory("QuestToken");
    const questTokenContract = await questTokenContractFactory.deploy(1000000);
    await questTokenContract.waitForDeployment()

}


const runMain = async ()=> {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


runMain()