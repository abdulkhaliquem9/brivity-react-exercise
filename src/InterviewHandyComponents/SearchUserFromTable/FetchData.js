import axios from 'axios';

const FetchData = (setUsers, setfiltereData) => {

    axios({ 

        method: 'get',
        url: 'https://randomuser.me/api/?results=5',
        responseType : 'application/json'

    })
    .then((res)=> {
        console.log('----res', res)

        // let pharseData = []
        // res.data.results.forEach(element => {
        //     const firstName = element.name.first
        //     const lastName = element.name.last
        //     const email = element.email
        //     const data = {firstName, lastName, email } 
        //     pharseData.push(data) 

        // });

        
        return res.data.results
    })
    .then((data )=> {
        console.log('----resData', data)
        setUsers(data)
        setfiltereData(data)
    })
    .catch((error)=> {
        console.log( 'error' ,error);

    })

}


export default FetchData; 


