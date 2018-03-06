export default (state = [], action) => {
    switch (action.type) {
      case 'BOOKING_SIMULATION_SUCCESS':
        return {
          ...state,
          bookingSimulationSuccess: action.booking_simulation.data,
          error: null
        }
      case 'BOOKING_SIMULATION_REJECTED':
  
      return {
          ...state,
          bookingSimulationRejected: action.booking_simulation.data,
          error: null
        }

      default:
        return state;
    }
  };