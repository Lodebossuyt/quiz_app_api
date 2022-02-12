import axios from "axios";

const quizService = axios.create({
    baseURL: '',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
    }
})

export default{
    getAll(){
        return quizService.get('https://opentdb.com/api.php?amount=10&category=9&type=multiple')
    }
}