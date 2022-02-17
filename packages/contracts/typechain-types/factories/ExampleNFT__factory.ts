/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ExampleNFT, ExampleNFTInterface } from "../ExampleNFT";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006006553480156200001657600080fd5b50604080518082018252600a815269115e185b5c1b1953919560b21b60208083019182528351808501909452600384526213919560ea1b908401528151919291620000649160009162000083565b5080516200007a90600190602084019062000083565b50505062000166565b828054620000919062000129565b90600052602060002090601f016020900481019282620000b5576000855562000100565b82601f10620000d057805160ff191683800117855562000100565b8280016001018555821562000100579182015b8281111562000100578251825591602001919060010190620000e3565b506200010e92915062000112565b5090565b5b808211156200010e576000815560010162000113565b600181811c908216806200013e57607f821691505b602082108114156200016057634e487b7160e01b600052602260045260246000fd5b50919050565b6115c580620001766000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101d6578063b88d4fde146101e9578063c87b56dd146101fc578063e985e9c51461020f57600080fd5b80636352211e146101a857806370a08231146101bb57806395d89b41146101ce57600080fd5b8063095ea7b3116100c8578063095ea7b3146101575780631249c58b1461016c57806323b872dd1461018257806342842e0e1461019557600080fd5b806301ffc9a7146100ef57806306fdde0314610117578063081812fc1461012c575b600080fd5b6101026100fd366004611179565b61024b565b60405190151581526020015b60405180910390f35b61011f6102e8565b60405161010e91906111ee565b61013f61013a366004611201565b61037a565b6040516001600160a01b03909116815260200161010e565b61016a610165366004611236565b610414565b005b610174610546565b60405190815260200161010e565b61016a610190366004611260565b61056f565b61016a6101a3366004611260565b6105f6565b61013f6101b6366004611201565b610611565b6101746101c936600461129c565b61069c565b61011f610736565b61016a6101e43660046112b7565b610745565b61016a6101f7366004611309565b610754565b61011f61020a366004611201565b6107e2565b61010261021d3660046113e5565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982167f80ac58cd0000000000000000000000000000000000000000000000000000000014806102ae57506001600160e01b031982167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102e257507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b6060600080546102f790611418565b80601f016020809104026020016040519081016040528092919081815260200182805461032390611418565b80156103705780601f1061034557610100808354040283529160200191610370565b820191906000526020600020905b81548152906001019060200180831161035357829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166103f85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061041f82610611565b9050806001600160a01b0316836001600160a01b031614156104a95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084016103ef565b336001600160a01b03821614806104c557506104c5813361021d565b6105375760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016103ef565b61054183836108d8565b505050565b600680546000918261055783611469565b919050555061056833600654610953565b5060065490565b6105793382610aa2565b6105eb5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016103ef565b610541838383610b99565b61054183838360405180602001604052806000815250610754565b6000818152600260205260408120546001600160a01b0316806102e25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e000000000000000000000000000000000000000000000060648201526084016103ef565b60006001600160a01b03821661071a5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f20616464726573730000000000000000000000000000000000000000000060648201526084016103ef565b506001600160a01b031660009081526003602052604090205490565b6060600180546102f790611418565b610750338383610d73565b5050565b61075e3383610aa2565b6107d05760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f76656400000000000000000000000000000060648201526084016103ef565b6107dc84848484610e42565b50505050565b6000818152600260205260409020546060906001600160a01b031661086f5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e000000000000000000000000000000000060648201526084016103ef565b600061088660408051602081019091526000815290565b905060008151116108a657604051806020016040528060008152506108d1565b806108b084610ecb565b6040516020016108c1929190611484565b6040516020818303038152906040525b9392505050565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038416908117909155819061091a82610611565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6001600160a01b0382166109a95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103ef565b6000818152600260205260409020546001600160a01b031615610a0e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103ef565b6001600160a01b0382166000908152600360205260408120805460019290610a379084906114b3565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000818152600260205260408120546001600160a01b0316610b1b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016103ef565b6000610b2683610611565b9050806001600160a01b0316846001600160a01b03161480610b615750836001600160a01b0316610b568461037a565b6001600160a01b0316145b80610b9157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610bac82610611565b6001600160a01b031614610c285760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e000000000000000000000000000000000000000000000060648201526084016103ef565b6001600160a01b038216610ca35760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103ef565b610cae6000826108d8565b6001600160a01b0383166000908152600360205260408120805460019290610cd79084906114cb565b90915550506001600160a01b0382166000908152600360205260408120805460019290610d059084906114b3565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610dd55760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103ef565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e4d848484610b99565b610e5984848484610ffd565b6107dc5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016103ef565b606081610f0b57505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115610f355780610f1f81611469565b9150610f2e9050600a836114f8565b9150610f0f565b60008167ffffffffffffffff811115610f5057610f506112f3565b6040519080825280601f01601f191660200182016040528015610f7a576020820181803683370190505b5090505b8415610b9157610f8f6001836114cb565b9150610f9c600a8661150c565b610fa79060306114b3565b60f81b818381518110610fbc57610fbc611520565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610ff6600a866114f8565b9450610f7e565b60006001600160a01b0384163b1561115557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611041903390899088908890600401611536565b602060405180830381600087803b15801561105b57600080fd5b505af192505050801561108b575060408051601f3d908101601f1916820190925261108891810190611572565b60015b61113b573d8080156110b9576040519150601f19603f3d011682016040523d82523d6000602084013e6110be565b606091505b5080516111335760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e746572000000000000000000000000000060648201526084016103ef565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b91565b506001949350505050565b6001600160e01b03198116811461117657600080fd5b50565b60006020828403121561118b57600080fd5b81356108d181611160565b60005b838110156111b1578181015183820152602001611199565b838111156107dc5750506000910152565b600081518084526111da816020860160208601611196565b601f01601f19169290920160200192915050565b6020815260006108d160208301846111c2565b60006020828403121561121357600080fd5b5035919050565b80356001600160a01b038116811461123157600080fd5b919050565b6000806040838503121561124957600080fd5b6112528361121a565b946020939093013593505050565b60008060006060848603121561127557600080fd5b61127e8461121a565b925061128c6020850161121a565b9150604084013590509250925092565b6000602082840312156112ae57600080fd5b6108d18261121a565b600080604083850312156112ca57600080fd5b6112d38361121a565b9150602083013580151581146112e857600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561131f57600080fd5b6113288561121a565b93506113366020860161121a565b925060408501359150606085013567ffffffffffffffff8082111561135a57600080fd5b818701915087601f83011261136e57600080fd5b813581811115611380576113806112f3565b604051601f8201601f19908116603f011681019083821181831017156113a8576113a86112f3565b816040528281528a60208487010111156113c157600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156113f857600080fd5b6114018361121a565b915061140f6020840161121a565b90509250929050565b600181811c9082168061142c57607f821691505b6020821081141561144d57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600060001982141561147d5761147d611453565b5060010190565b60008351611496818460208801611196565b8351908301906114aa818360208801611196565b01949350505050565b600082198211156114c6576114c6611453565b500190565b6000828210156114dd576114dd611453565b500390565b634e487b7160e01b600052601260045260246000fd5b600082611507576115076114e2565b500490565b60008261151b5761151b6114e2565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b0380871683528086166020840152508360408301526080606083015261156860808301846111c2565b9695505050505050565b60006020828403121561158457600080fd5b81516108d18161116056fea2646970667358221220683a5308a317025be2ead543fd72e3992710bafbbeb31c38991bc1aa0bb5050764736f6c63430008090033";

type ExampleNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleNFT__factory extends ContractFactory {
  constructor(...args: ExampleNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExampleNFT> {
    return super.deploy(overrides || {}) as Promise<ExampleNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExampleNFT {
    return super.attach(address) as ExampleNFT;
  }
  connect(signer: Signer): ExampleNFT__factory {
    return super.connect(signer) as ExampleNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleNFTInterface {
    return new utils.Interface(_abi) as ExampleNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleNFT {
    return new Contract(address, _abi, signerOrProvider) as ExampleNFT;
  }
}
