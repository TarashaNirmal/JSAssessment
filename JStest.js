
const NFTs=[]

function mintNFT (s_name,s_uid,s_sports) {
  const NFT = {
    "sname": s_name,
    "suid": s_uid,
    "ssports":s_sports
  }
  NFTs.push(NFT);
  console.log("minted:"+s_name);
}

function listNFTs () {
for(let i=0;i<NFTs.length;i++){
console.log("\nStudent Name: "+NFTs[i].sname);
console.log("Student UID: "+NFTs[i].suid);
console.log("Student sports: "+NFTs[i].ssports);
}
}

function getTotalSupply() {
console.log("\n"+NFTs.length);
}

mintNFT("Tarasha Nirmal", "22BCS11138","Badminton");
mintNFT("Aastha Jha", "22BCS17658","Hockey");
mintNFT("Sneha", "22BCS14322","Tennis");
mintNFT("Muskan", "22BCS19150","Chess");
listNFTs();
getTotalSupply();
