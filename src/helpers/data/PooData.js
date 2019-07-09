import axios from 'axios';
import apiKeys from '../apiKeys.json'

const url = apiKeys.firebaseKeys.databaseURL;

const getPoos = (uid) => new Promise((resolve, reject) => {
  axios.get(`${url}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((resp) => {
      const poos = [];
      if (resp.data !== null) {
        Object.keys(resp.data).forEach((key) => {
          resp.data[key].id = key;
          poos.push(resp.data[key]);
        })
        resolve(poos);
      }
    })
    .catch(err => reject(err))
})

const getSingleScat = (scatId) => axios.get(`${url}/scats/${scatId}.json`)

const deletePoos = pooId => axios.delete(`${url}/scats/${pooId}.json`);

export default { getPoos, deletePoos, getSingleScat };
