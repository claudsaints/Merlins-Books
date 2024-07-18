import {useState} from 'react'
import { CiSearch } from 'react-icons/ci'
import Card from '../card';
import {  useNavigate } from 'react-router-dom';


export default function Nav(){
    const [search,setSearch] = useState("");
    const navg= useNavigate()
    const procurarLivro =  (evento) => {
        if(!search) {
            return
        }else{
            //NAVEGA PARA PÁGINA DE PESQUISA
            navg(`/pesquisa/${search}`)
            setSearch(" ")
            

            // axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBfkxqPXgpg6ZQEg1mxzVQGSJdMf3v23As' + '&maxResults=20')
            //     .then((res) => {
            //         setData(res.data.items)
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //     })
        }
    }
    return (
        <>
            <form onSubmit={procurarLivro} className='header'>
                <div className='procura'>
                    <input className='busca' type="text" placeholder='Nome Do Livro'
                        value={search} onChange={e => setSearch(e.target.value)}
                    /> 
                    <button className='btn pesquisa'><CiSearch/></button>
                </div>
            </form> 
        </>
    )
}