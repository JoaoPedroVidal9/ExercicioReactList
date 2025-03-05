import axios from "axios"

const api = axios.create({
    baseURL:'http://localhost:5000/api/v1/',
    headers:{'accept':'application/json'}
})

const sheets = {
    listEvento:() =>api.get('evento'),
    listOrg:() =>api.get('organizador'),
    listIngr:() =>api.get('ingresso'),
}

export default sheets;