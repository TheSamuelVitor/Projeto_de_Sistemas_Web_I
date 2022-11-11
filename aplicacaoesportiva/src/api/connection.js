import axios from 'axios'

const client = axios.create({
  baseURL: "https://api.api-futebol.com.br",
  headers: {
    "Authorization": "Bearer test_af0ae0442a4f25c88554d4ac2e8d3f "
  }
})

export default client