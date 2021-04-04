import axios from 'axios'
import { BASE_URL, AUTH_TOKEN } from '../constants/constants'

class ApiClass {
  constructor() {
    this.request = axios.create({
      baseURL: BASE_URL
    });
    this.request.defaults.timeout = 30000;
    this.request.defaults.headers.common['Authorization'] = AUTH_TOKEN
  }



//   getSyllabus = () => {
//     return this.request.get(`syllabus/${config.TEST_ID}`)
//   }

}

export default ApiClass;
