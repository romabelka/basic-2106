//import uuidv4 from 'uuid/v4';

//console.log(uuidv4()); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'

export default store => next => action => {
  //console.log("---", "state before: ", store.getState());
  //console.log("---", "dispatching: ", action);
  next(action);
  //console.log("---", "state after: ", store.getState());
  //console.log("---", "random UUID:", uuidv4())
};
