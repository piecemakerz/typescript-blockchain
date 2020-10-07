import * as CryptoJS from "crypto-js";

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

  static calculateBlockHash = (
    index: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
  };
}

const genesisBlock: Block = new Block(
  0,
  "2101230232323",
  "",
  "piecemakerz",
  132421
);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const prevBlock: Block = getLatestBlock();
  const newIdx: number = prevBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIdx,
    prevBlock.hash,
    newTimestamp,
    data
  );
  return new Block(newIdx, newHash, prevBlock.hash, data, newTimestamp);
};

const block1: Block = createNewBlock("piecemakerz");
const block2: Block = createNewBlock("Bye noob");

console.log(block1, block2);

export {};
