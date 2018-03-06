import axios from 'axios';

export default (obj,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: "http://155.133.129.197:4200/api/simulation/createSimulation",
              data: obj,
              headers: {
                'Content-Type': "application/json",
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "SIMULATION_SUCCESS",
                  simulation: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "SIMULATION_REJECTED" , simulation: error.response.data });
              });
          }

        
}