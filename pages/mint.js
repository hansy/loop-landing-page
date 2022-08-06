const Mint = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main>
          <div className="flex flex-col justify-center align-center items-center">
            <h1 className="text-white text-3xl mb-6">
              Loop Landing Page Video NFT
            </h1>
            <iframe
              src="https://gateway.ipfscdn.io/ipfs/QmUfp6thZQTmNKS6tzijJpxdoBe9X7spHwzRjUh3RPTAwF/edition-drop.html?contract=0x43a36C69087b0D099AC7d49616ACCda49C5F1D39&chainId=80001&tokenId=0&rpcUrl=https%3A%2F%2Fpolygon-mumbai.infura.io%2Fv3%2F5698e605a3c44e849d3c13c817847f9d"
              width="600px"
              height="600px"
              frameborder="0"
            ></iframe>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mint;
