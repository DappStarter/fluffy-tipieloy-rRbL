require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name riot place artwork grace gloom tattoo genius'; 
let testAccounts = [
"0xdd6a19708b4c3b67d3fa27d742a6a77d91b0fc73de8f8953987e14bf263f56b2",
"0x9cb2d390fcfe2cfa58d4a92a0e151e5348ea5c0d8049f3045b743319821ed340",
"0x4068c0b52bf9a764f3238824a603ae269c1b9a0290d91b328175ab2e7cec8e72",
"0xd5b1b5530d3d59cfb7647b8ce04a4df24ac3d78a201a315dce19d655794dfd28",
"0x0ce0518a60df547687fc7acd6b93c40ae3ec43b530877207a07155de02a8182a",
"0x01ab4340fb38847edc08e97ffd02c273584b285947a79033431a04145cf63f63",
"0x1a777b61ec2bbd650b72fd2de94a2613d64cce6c885ab2584c815e7bc637f96a",
"0xd8c7401e0b15a41ad639818972ce21dd952d56fcc8f4510e286da2445ff5570c",
"0xe0d42cee640725b0f2ecc41a2310db5e5bd675fc425f1411c25c78d8b3b4a4ce",
"0x2c37e70e23476d2079b0bbbaa6b06f000e67421b0976a46bacf572832cf45858"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


