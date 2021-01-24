import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzQyYTg0MzVlNzNmYjUzNTdjMWQyN2IxMGRiYTMyYiIsInN1YiI6IjVmZmRiNjZiOGU4ZDMwMDA0M2Q4YzgyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-8Jbrdz6XyLty37qwI6O7BxEB2tQJJUB6N0cC5FhgiE'
    }
})

