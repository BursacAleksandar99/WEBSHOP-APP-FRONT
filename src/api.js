import axios from 'axios';




function Api() {
    axios.create({
        baseURL: 'http://localhost:3001',
    });
}

export default Api;