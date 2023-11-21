import { ADDITEM, DELETEITEM } from "../actions";

const handleCart = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADDITEM:
      // Check if the product exists
      const exist = state.find((x) => x.id === payload.id);
      if (exist) {
        return state.map((x) =>
          x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case DELETEITEM:
      const exist1 = state.find((x) => x.id === payload.id);
      if (exist1) {
        return state.filter((x) => x.id !== exist1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
  }
};

export default handleCart;

// import { ADDITEM, DELETEITEM } from "../actions";

// const handleCart = (state = [], action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case ADDITEM:
//       return state.find((x) => x.id === payload.id)
//         ? state.map((x) => (x.id === payload.id ? { ...x, qty: x.qty + 1 } : x))
//         : [...state, { ...payload, qty: 1 }];

//     case DELETEITEM:
//       return state.find((x) => x.id === payload.id)
//         ? state.filter((x) => x.id !== payload.id)
//         : state.map((x) => (x.id === payload.id ? { ...x, qty: x.qty - 1 } : x));

//     default:
//       state;
//       return state;
//   }
// };

// export default handleCart;

// import { ADDITEM, DELETEITEM } from "../actions";

// const cart = [];

// const handleCart = (state = cart, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case ADDITEM:
//       // Verificar si el producto existe
//       const exist = state.find((x) => x.id === payload.id);
//       if (exist) {
//         return state.map((x) =>
//           //Incrementar cantidad
//           x.id === payload.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = payload;
//         return [
//           ...state,
//           {
//             ...product,
//             qty: 1,
//           },
//         ];
//       }
//       break;

//     case DELETEITEM:
//       const exist1 = state.find((x) => x.id === payload.id);
//       if (exist1) {
//         return state.filter((x) => x.id !== exist1.id);
//       } else {
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//       break;

//     default:
//       break;
//   }
// };

// export default handleCart;
