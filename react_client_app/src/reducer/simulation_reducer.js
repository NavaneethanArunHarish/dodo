export default (state = [], action) => {
    switch (action.type) {
      case 'SIMULATION_SUCCESS':
        return {
          ...state,
          simulationSuccess: action.simulation.data,
          error: null
        }
      case 'SIMULATION_REJECTED':
  
      return {
          ...state,
          simulationRejected: action.simulation.data,
          error: null
        }

      default:
        return state;
    }
  };