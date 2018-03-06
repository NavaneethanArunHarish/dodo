import axios from 'axios';

export default (obj,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: "http://155.133.129.197:4200/api/simulation/createBooking",
              data: obj,
              headers: {
                'Content-Type': "application/json",
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "BOOKING_SIMULATION_SUCCESS",
                  booking_simulation: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "BOOKING_SIMULATION_REJECTED" , booking_simulation: error.response.data });
              });
          }

        
}