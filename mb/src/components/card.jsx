export default function Card({books}) {
    console.log(books)
    if (books.imageLinks){
        return (
            <>
                <div className="card"> 
                    <img src={books.imageLinks.smallThumbnail} alt="Capa Livro" />
                    <h3>{books.title}</h3>
                </div>
            </>
        )
    }else{
        return

    }
}