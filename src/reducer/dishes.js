//import { normalizedDishes } from "../fixtures";
import { arrToMap } from "../utils";
//import { fromJS, Map } from "immutable";
import { LOAD_RESTAURANT_MENU, START, ERROR, SUCCESS } from "../constants";


//const defaultDishes = arrToMap(normalizedDishes);

/*const defaultDishes = new Map({
  
  //loading: false,
  //error: null
});*/
const defaultDishes = {};

export default (dishes = {defaultDishes}, { type, restId, response, error }) => {
  switch (type) {
    
    case LOAD_RESTAURANT_MENU + START:
      //let newstate = dishes.setIn([restId,"loading"], true);
      let newstate = {...dishes,
                       [restId]: {
                        loading: true
                       }             
      };
      //console.log(newstate);
      return newstate;

    case LOAD_RESTAURANT_MENU + ERROR:
      return dishes.setIn([restId,"error"], error);

    case LOAD_RESTAURANT_MENU + SUCCESS:
      /*return dishes
        .setIn([restId,"entities"], fromJS(arrToMap(response)))
        .setIn([restId,"loading"], false);*/

        return {
          ...dishes,
          [restId]:{
            loading: false,
            "entities": arrToMap(response)
          }
        }

    default:
      return dishes;
  
  
  
  /*switch (type) {
    default:
      return dishes;*/
  }
};
