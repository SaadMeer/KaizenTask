import React, { useState } from 'react'
import { useWalletClient } from 'wagmi';
// import { ethers } from "ethers";
import Web3 from "web3";

const Address = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [walletBalance, setWalletBalance] = useState();
    const { data: signer } = useWalletClient();
    const signerAddress = signer?.account?.address;
    console.log(signerAddress);

    async function requestAccount() {
        console.log("Requesting account...");
        if (window.ethereum) {
            console.log("Metamask Wallet Detected");
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setWalletAddress(accounts[0]);
                console.log(walletAddress);
            } catch (error) {
                console.log("Error connecting Wallet");
            }
        } else {
            console.log("Metamask Wallet Absent");
        }
    }

    async function getBalance() {
        try {
            window.web3 = new Web3(window.ethereum);
            const acounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(acounts[0])
            let balance = await window.web3.eth.getBalance(acounts[0])
            let balanceInEther = window.web3.utils.fromWei(balance, 'ether');

            let balanceFloat = parseFloat(balanceInEther).toFixed(2);
            console.log(balanceFloat)
            setWalletBalance(balanceFloat)
        } catch (error) {
            console.log(error);
        }
    }
    requestAccount();
    getBalance();

    return (
        <div className="App">
            <header className="App-header">
                <button>Connect Metamask Wallet</button>
                <h3>Wallet Address: {walletAddress}</h3>
                <h2>Account Balance: <span className='primaryClr'>{walletBalance}</span></h2>
            </header>
        </div>
    )
}

export default Address