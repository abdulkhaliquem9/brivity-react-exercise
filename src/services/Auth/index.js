import axios from 'axios';
const BASE_URL = "https://brivity-react-exercise.herokuapp.com"


export function signUp(payload, setUserInfo) {
    setUserInfo({ isLoading: true })

    console.log('---payload signup', payload)

    const URL = `${BASE_URL}/users`
    axios.post(URL, payload)
        .then((res) => {
            console.log('----signup res', res)

            setUserInfo({ isLoading: false, ...res })


        })
        .catch((err) => {
            console.log('----signup error', err.response.data.errors)
            setUserInfo({ isLoading: false, error: err })
        })

}