import React, { useState, useEffect } from 'react';
import FetchData from './FetchData';
import Table from 'react-bootstrap/Table'




const SearchUserTable = () => {


    const [users, setUsers] = useState([])
    const [searcValue, setSearcValue] = useState('')
    const [filtereData, setfiltereData] = useState([])




    console.log('----users', users, filtereData)


    useEffect(() => {
        FetchData(setUsers, setfiltereData)
    }, [])



    const onChange = (e) => {
        setSearcValue(e.target.value)

    }

    const onSubmit = () => {
        console.log('----hello serach')
        const filterdata = filter(users, searcValue)
        setfiltereData(filterdata)

    }


    const filter = (users, key) => {
        console.log('users', users);
        return users.filter((row) => {
            return row.name.first === key || row.name.last === key

        });
    };


    return (
        <div>
            <div>
                Search : <input type="text" id="uemail" name="Username" value={searcValue} onChange={onChange} />
                <input type="button" value="Submit" onClick={onSubmit} />
            </div>



            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {filtereData.map((list, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{list.name.first}</td>
                            <td>{list.name.last}</td>
                            <td>{list.email}</td>
                        </tr>
                    ))}



                </tbody>


            </Table>



        </div>


    )
}


export default SearchUserTable