import * as functions from 'firebase-functions';
import axios from 'axios';

const params = {  
    "limit":35,
    "limit_alu":3,
    "filters":{  
       "category":{  
          "id":"22"
       },
       "enums":{  
          "ad_type":[  
             "offer"
          ]
       },
       "location":{  
          "locations":[  
             {  
                "locationType":"region",
                "label":"Ile-de-France",
                "region_id":"12"
             }
          ]
       },
       "keywords":{  
 
       },
       "ranges":{  
 
       }
    }
 }

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
    axios.post('https://api.leboncoin.fr/finder/search', params)
        .then((axiosResponse) => {
            const firstAd = axiosResponse.data.ads[0]

            response.set('Content-Type', 'application/json');
            response.send(firstAd)
        })
        .catch((error) => {response.send(error.response.data)});
});
