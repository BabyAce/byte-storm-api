import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app'
import { getDatabase }  from 'firebase-admin/database'
import { getFirestore } from 'firebase-admin/firestore'

const config = {
  project_id: 'byte-storm',
  client_email: 'firebase-adminsdk-yvf09@byte-storm.iam.gserviceaccount.com',
  private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDL73Hm1bgVpMkK\nxmR5gTcGUwu2tQsvWoQjADRG8fXmaDxG9ZyyrLDBpOSqx2t1t4eMebJER6BsY2sD\nB8OVLteiAKJqiUzB2QAn0vnVMqJwLsZXVARZyLSwt1WKmZpw7MZPJuOqHhfUqxOQ\n7UGafaPIi99bPjsw6i4QcJNrizxnN+SS6IPfWqvb1NN26vmjEu+kmCNDrTheN07K\nINFDO1vBs3E3z/BdvN+612GausSFvDLxL1ZLzGbOaUaoC9qMpzu1BaIripOcSIh/\nf6moCBv9rWaixX7a+vmY2Qp6EXIN2EdUyk9ACZFRibvEJSBbt/qRYZHk4dJkjKqi\nCYplrlxVAgMBAAECggEASD7mWgFieoBrHF8WHxlQlfP7lVljwf3OC9w5qNx04ZAR\nso22WnHlGGTDAWEuR4CiC3jdV2UMhvldYrBwcDws9d5Fq3pCb/XhITqTeRy8AQQB\nDdTcybXZlTUNn9E0rkajJk0/n/eTN6r3foMel41k5Vnv4ZIVRAniEb7f6txjpKi9\ncoIfXtTsqtTjWssG0VRep8gNwIu3B2jYxaSK7ctV3mlOdagjLnxVzj7xkCif5go4\n5vApW6TqVuPo4K4N2cq1rD2LIAtODG/4t2dTAWaQmcD78sYjxyy35fKH42rTph0F\nUpG5J3kaBlUd0RjgFTB5CY89yMZihRlq2AKlbEerzQKBgQDmWwjmVCiP1EsAo1/A\nPB7siVCWEHW4xYPxDuhGFoXNx0LPESjz6LAQKUIW0S9RNkOG9XTGZVLN2kgGk3lq\nkmQROO98Gi/ONkiBjfTmi6WOfZDRiFtR54X1EnllW9r8nuw8spRKlwbQgvOWh1TD\nHwtmx3go6MqzClo0SE7mm3KMRwKBgQDio3OrEtmu6jO3X8X/zq0tvnZixl65WfY3\nm4+DfEt7/Glpm6WZPu1AAnDwsH2clgGFaUOsEyxKop62FuY7cxKOc1y8VxSvreRc\nNOE82z7nhDfSKLcLq3t3ohmsWhbYZVrRqivryyJ4euIukEPf9E09kqqZk/GvQKkh\nC6gfJ3jMgwKBgAT5PDT05jdMxx3JaTzWT3id8l57Fn+ZzCJ9RuiUfekWf0vHPBIg\nGQUQTvv9Ij9no4ebbx0FfQcyylFSB9IUPRLeHtWYHyYdp+0cKoh7xWRRM7pCbm5T\nSGIlNvfIRu8jY0hgNrFxl1UTLr02SM85sV5TujVv6Uh6Vb5BPWrfOlbrAoGBAM+F\njT9DJnIEX1B0cM+YBnjRYoN1UnzzxAEM/u8Nm+yupjMeYxacSQ+IbLPnV01PCZuI\nVH+2mqLInvzqoOwkpQQs2+hU8Esgte48OVXJB6NkLNzRjTIxVf+oPUvUvgBtZih/\nYnIo8apSEtNCI/RoNWXA61du4Slw0qzAiLPmJ7VTAoGAfIZzxFxKW/T44QQYEwIb\nlAY+UPI/Yy6wT5ECX+pTJj4/UWWqa+M3dm/Cd1maymYZoUDGNcFb2NWsCZAS1PoU\n3Wc59Tx7YpB6dydWGI6BWKtBCjpdHl+9eDpX4Arv/7DTVAhFgNaTS1e3DJVrfEPC\n2jS0qq8Twc+2UEwQJKo7YgI=\n-----END PRIVATE KEY-----\n'
}

// init firebase app
initializeApp({
  credential: cert(<ServiceAccount>config),
  databaseURL: process.env.FIREBASE_DATABASE_URL
})

// init services
export const firebaseDb = getFirestore()