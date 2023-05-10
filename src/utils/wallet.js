// First time wallet connection
export const connectWallet = async () => {
  if (window.ethereum) {
      try {
          const addressArray = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const obj = {
            address: addressArray[0],
          };
          return obj;
        } catch (err) {
          return {
            address: "",
          };
        }
  } else {
      return {
        address: "",
      };
    }
}

// For an already connected wallet upon browser refresh

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
        };
      } else {
        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
    };
  }
}