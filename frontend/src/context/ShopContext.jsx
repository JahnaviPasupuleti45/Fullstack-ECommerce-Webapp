// import { createContext, useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();
//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error("Select Product Size");
//       return;
//     }

//     let cartData = structuredClone(cartItems);
//     if (cartData[itemId]) {
//       cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
//     } else {
//       cartData[itemId] = { [size]: 1 };
//     }

//     setCartItems(cartData);

//     if (token) {
//       try {
//         await axios.post(
//           `${backendUrl}/api/cart/add`,
//           { itemId, size },
//           { headers: { token } }
//         );
//       } catch (err) {
//         console.log(err);
//         toast.error(err.message);
//       }
//     }
//   };

//   const updateCartQuantity = async (itemId, size, quantity) => {
//     let cardData = structuredClone(cartItems);
//     cardData[itemId][size] = quantity;
//     setCartItems(cardData);

//     if (token) {
//       try {
//         await axios.post(
//           `${backendUrl}/api/cart/update`,
//           { itemId, size, quantity },
//           { headers: { token } }
//         );
//       } catch (err) {
//         console.log(err);
//         toast.error(err.message);
//       }
//     }
//   };

//   const getCartCount = () => {
//     let totalCount = 0;
//     for (const items in cartItems) {
//       for (const item in cartItems[items]) {
//         try {
//           if (cartItems[items][item] > 0) {
//             totalCount += cartItems[items][item];
//           }
//         } catch (err) {}
//       }
//     }
//     return totalCount;
//   };

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const items in cartItems) {
//       const itemInfo = products.find((product) => product._id === items);
//       for (const item in cartItems[items]) {
//         try {
//           if (cartItems[items][item] > 0) {
//             totalAmount += itemInfo.price * cartItems[items][item];
//           }
//         } catch (err) {}
//       }
//     }
//     return totalAmount;
//   };

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/product/list`);
//       if (response.data.success) {
//         setProducts(response.data.products);
//       } else {
//         toast.error("Unable to fetch products");
//       }
//     } catch (err) {
//       console.log(err.message);
//       toast.error("Error fetching products");
//     }
//   };

//   const getUserCart = async (token) => {
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/cart/get`,
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart:", response.data.cartData);
//       }
//     } catch (err) {
//       console.log(err.message);
//       toast.error("Failed to fetch cart");
//     }
//   };

//   // Step 1: Load token from localStorage on app start
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   // Step 2: When token is ready, fetch cart
//   useEffect(() => {
//     if (token) {
//       getUserCart(token);
//     }
//   }, [token]);

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     addToCart,
//     cartItems,
//     getCartCount,
//     updateCartQuantity,
//     getCartAmount,
//     navigate,
//     backendUrl,
//     token,
//     setToken,
//     setCartItems,
//   };

//   return (
//     <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;



import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState(null); // ✅ Add user data state
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItems(cartData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId, size },
          { headers: { token } }
        );
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  const updateCartQuantity = async (itemId, size, quantity) => {
    let cardData = structuredClone(cartItems);
    cardData[itemId][size] = quantity;
    setCartItems(cardData);

    if (token) {
      try {
        await axios.post(
          `${backendUrl}/api/cart/update`,
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (err) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (err) {}
      }
    }
    return totalAmount;
  };

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error("Unable to fetch products");
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Error fetching products");
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setCartItems(response.data.cartData);
        console.log("Cart:", response.data.cartData);
      }
    } catch (err) {
      console.log(err.message);
      toast.error("Failed to fetch cart");
    }
  };

  // ✅ Function to get user data from token
  const getUserData = async (token) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/user/profile`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setUserData(response.data.user);
      }
    } catch (err) {
      console.log("Failed to fetch user data:", err.message);
    }
  };

  // Step 1: Load token from localStorage on app start
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserData = localStorage.getItem("userData");
    
    if (storedToken) {
      setToken(storedToken);
    }
    
    // ✅ Load stored user data
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  // Step 2: When token is ready, fetch cart and user data
  useEffect(() => {
    if (token) {
      getUserCart(token);
      // Only fetch if we don't have user data
      if (!userData) {
        getUserData(token);
      }
    }
  }, [token]);

  useEffect(() => {
    getProductsData();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateCartQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
    setCartItems,
    userData, // ✅ Add userData to context
    setUserData, // ✅ Add setUserData to context
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;