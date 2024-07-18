import Nav from "../components/nav/nav"
import { useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import Card from "../components/card"
import axios from "axios"


export default function Pesquisa(){

    const key = import.meta.env.VITE_KEY

    //parametros passados na pesquisa 
    const {q} = useParams()
    
    const [dataLivro,setData] = useState([]);
    //realiza a requizição da google api apenas ao carregar
    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+q+'&key=' + key + '&maxResults=20')
        .then((res) => {
            //separa os elementos utilizaveis
            const vazio = []
            let data = (res.data.items)
            for (let i = 0; i < data.length;i++ ){
                vazio.push(data[i].volumeInfo)
            }
            //define o elemento
            setData(vazio)
        })
        .catch((error) => console.log(error))
    },[])

    return (
        <>
            <Nav/>
            <h2>Resultados par a Pesquisa: {q} </h2>
            
            <div className="container">
                { 
                    dataLivro.map((obj) => <Card books={obj} key={obj.canonicalVolumeLink}/>)                         
                }
            </div>

        </>

    )

}