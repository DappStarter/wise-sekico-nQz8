require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun foot curve remember pitch hospital coral light army giggle'; 
let testAccounts = [
"0xa5e5d1ea8c373faa8fe4865eb5779b20bd7e61e54934ba4fcc3651b843db21b6",
"0x1dfa209a6b1cdf29b2e25d1fcf9c6b99054ea8c29a7b80039d8bc5af758f4f6f",
"0xa363e31424ebfa7a5eb6db84e0ed687262bf74bd944a976cb398264f1c3441db",
"0x8a14367c4d4692025a5fc6e5add92b341da90e65d46494c9fd991ee816bc91ab",
"0xee54de6c7b4d57e668375e1d78f5562c0c6a7dee9a592cbae4619db67aca9fcb",
"0x710040310d817c009e524ccfabc5fe53470d94a2861d6bf91280111746e909cc",
"0xf857d354df9bf5702a96991bf903b6d01b656c6f7a9f19d87bc0528a51765682",
"0xfd1021d73db12fb4b2eb3dbd7a1a6370304afc9353bb37a18ba1f5b23486546c",
"0x30f18c2beda8143aa27abf173f1713c7d9a07a32c880a235582179b648824950",
"0xdb1e5cdd2b7b98a99c6bf2a249efdfe4de27d9559d10fae808245a23df1784fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

