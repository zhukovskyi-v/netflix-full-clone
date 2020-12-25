import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyAeQmRp97YXqJ9rxS_lApdRemy6ugzlmlg',
  authDomain: 'netflix-clone-fd7a6.firebaseapp.com',
  projectId: 'netflix-clone-fd7a6',
  storageBucket: 'netflix-clone-fd7a6.appspot.com',
  messagingSenderId: '342741113023',
  appId: '1:342741113023:web:4cdf79d492adf05ba74e0a',
  measurementId: 'G-7W5YMJY263',
}
const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)
export { firebase }
