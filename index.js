const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const SITE_BUYING = "SITE_BUYING";
const SITE_AVAILABLE = "SITE_AVAILABLE";
const BUILD_DUPLEX = "BUILD_DUPLEX";
const AVAILABLE_DUPLEX = "AVAILABLE_DUPLEX";

function buyingSite(qty = 1) {
  return {
    type: SITE_BUYING,
    payload: qty,
  };
}
function updateSite(qty = 3) {
  return {
    type: SITE_AVAILABLE,
    payload: qty,
  };
}
function buildDuplex(qty = 1) {
  return {
    type: BUILD_DUPLEX,
    payload: qty,
  };
}
function availableDuplex(qty = 1) {
  return {
    type: AVAILABLE_DUPLEX,
    payload: qty,
  };
}

// const initialState = {
//   numberOfPlots: 50,
//   numberOfDuplex: 50,
// };
const initialPlotsState={
    numberOfPlots:50
}
const initialDuplexState={
    numberOfDuplex:50
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SITE_BUYING:
//       return {
//         ...state,
//         numberOfPlots: state.numberOfPlots - 1,
//       };
//     case SITE_AVAILABLE: {
//       return {
//         ...state,
//         numberOfPlots: state.numberOfPlots + action.payload,
//       };
//     }
//     case BUILD_DUPLEX: {
//       return {
//         ...state,
//         numberOfDuplex: state.numberOfDuplex - 1,
//       };
//     }
//     case AVAILABLE_DUPLEX: {
//       return {
//         ...state,
//         numberOfDuplex: state.numberOfDuplex + action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

const plotReducer = (state = initialPlotsState, action) => {
    switch (action.type) {
      case SITE_BUYING:
        return {
          ...state,
          numberOfPlots: state.numberOfPlots - 1,
        };
      case SITE_AVAILABLE: {
        return {
          ...state,
          numberOfPlots: state.numberOfPlots + action.payload,
        };
      }   
      default:
        return state;
    }
  };

  const duplexReducer = (state = initialDuplexState, action) => {
    switch (action.type) {
        case BUILD_DUPLEX: {
            return {
              ...state,
              numberOfDuplex: state.numberOfDuplex - 1,
            };
          }
          case AVAILABLE_DUPLEX: {
            return {
              ...state,
              numberOfDuplex: state.numberOfDuplex + action.payload,
            };
        } 
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
    plot: plotReducer,
    duplex: duplexReducer,
})

const store = createStore(rootReducer);
console.log("initial state :", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("state Update", store.getState())
);

// store.dispatch(buyingSite())
// store.dispatch(buyingSite())
// store.dispatch(updateSite())

const actions = bindActionCreator(
  { buyingSite, updateSite, buildDuplex, availableDuplex },
  store.dispatch
);
  actions.buyingSite();
  actions.updateSite(3);
  actions.buildDuplex();
  actions.availableDuplex(1);
  unsubscribe();


  /*   case BUILD_DUPLEX: {
        return {
          ...state,
          numberOfDuplex: state.numberOfDuplex - 1,
        };
      }
      case AVAILABLE_DUPLEX: {
        return {
          ...state,
          numberOfDuplex: state.numberOfDuplex + action.payload,
        };
      } */