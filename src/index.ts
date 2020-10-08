import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    index: number,
    prevHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + prevHash + timestamp + data).toString();
  };

  static validateStructure = (block: Block): boolean => {
    return (
      typeof block.index === "number" &&
      typeof block.hash === "string" &&
      typeof block.prevHash === "string" &&
      typeof block.timestamp === "number" &&
      block.data === "string"
    );
  };

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
  const newBlock: Block = new Block(
    newIdx,
    newHash,
    prevBlock.hash,
    data,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const isBlockValid = (candidate: Block, prev: Block): boolean => {
  if (!Block.validateStructure(candidate)) {
    return false;
  } else if (prev.index + 1 !== candidate.index) {
    return false;
  } else if (prev.hash !== candidate.prevHash) {
    return false;
  } else if (getHashForBlock(candidate) !== candidate.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidate: Block): void => {
  if (isBlockValid(candidate, getLatestBlock())) {
    blockchain.push(candidate);
  }
};
const getHashForBlock = (block: Block): string => {
  return Block.calculateBlockHash(
    block.index,
    block.prevHash,
    block.timestamp,
    block.data
  );
};

createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");

export {};
