import './App.css';
import { useEffect, useState } from 'react';
import { API } from './constants';

function App() {
    const [state, setState] = useState({
        bin: ''
    })

    const [data, setData] = useState([])

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = async () => {
        const response = await API.get(`/bincheck/${state.bin}`)
        setData(response.data)
        localStorage.removeItem('data')
        localStorage.setItem('data', JSON.stringify(response.data))
    }

    const handleClear = () => {
        setState({
            bin: ''
        })
    }

    useEffect(() => {
        console.log(localStorage.data);
        // if (data.length === 0) {
        //     setData(JSON.parse(localStorage.data))
        // }
    }, [])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input type='number'
                    placeholder="Enter your credit card number"
                    name='bin'
                    value={state.bin}
                    onChange={handleChange} />

            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '5px', width: '8%', margin: '0 auto' }}>
                <button onClick={handleClear}>clear</button>
                <button onClick={handleClick}>excute</button>
            </div>
            {data && <table>
                <tr>
                    <th>Nama Bank</th>
                    <th>Negara</th>
                    <th>Website Bank</th>
                    <th>Tipe Kartu</th>
                    <th>Jenis Kartu</th>
                    <th>Code Bin</th>
                </tr>
                <tr>
                    <td>{data.bank_name}</td>
                    <td>{data.country}</td>
                    <td><a href={`https://${data.url}`} target='_blank'>Link</a></td>
                    <td>{data.type === 'Debit' ? `${data.type}` : `${data.type}/Kredit`}</td>
                    <td>{data.scheme}</td>
                    <td>{data.bin}</td>
                </tr >
            </table >}
        </>
    );
}

export default App;