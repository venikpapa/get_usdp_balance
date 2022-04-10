async function main() {
  
  let minABI = [
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"","type":"uint8"}],
      "type":"function"
    }
  ];

  let tokenAddress = process.env.USDP_ADDRESS;
  let walletAddress = process.env.WALLET_ADDRESS;
  const contract = new ethers.Contract(tokenAddress, minABI, ethers.provider);
  
  let balance = String(await contract.balanceOf(walletAddress));
  let decimals = await contract.decimals();
  let dot_position = balance.length-decimals;
  balance = balance.substring(0, dot_position) + "." + balance.substring(dot_position, balance.length);
  console.log("My account balance is", balance, "USD+.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
