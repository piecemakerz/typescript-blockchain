class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;
  constructor(index, hash, prevHash, data, timestamp) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  "2101230232323",
  "",
  "piecemakerz",
  132421
);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
