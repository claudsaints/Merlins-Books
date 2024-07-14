import { CiSearch } from 'react-icons/ci'
export default function Nav(){
    return (
        <>
            <form >
                <div className='procura'>
                    <input className='busca' type="text" />
                    <button className='btn pesquisa'><CiSearch/></button>
                </div>
            </form>
        </>
    )
}