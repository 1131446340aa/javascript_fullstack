import axios from 'axios'
export function getIndex() {
    axios.get('http://localhost:8080/static/package-lock.json',{}).then(res => {
        console.log(res);

    })
}