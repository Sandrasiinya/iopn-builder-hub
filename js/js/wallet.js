async function connectWallet() {

 if (!window.ethereum) {
   alert("Install MetaMask");
   return;
 }

 try {

   const accounts =
   await window.ethereum.request({
      method:"eth_requestAccounts"
   });

   document.getElementById(
     "walletAddress"
   ).innerText =
   accounts[0];

 } catch(err) {

   console.log(err);

 }

}
async function switchNetwork() {

 try {

   await ethereum.request({
     method:
     "wallet_switchEthereumChain",

     params: [{
       chainId:"0x22C8"
     }]
   });

 } catch(err) {

   console.log(err);

 }

}
