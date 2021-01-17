import { Book } from '../components';

//i'm not show if i should do all this inside a componet
export default function BookCard({ books }) {
    return (
        <Book>
            {books.map((book) =>
                <Book.Card key={book.BookId}>
                    <Book.Image src={`/images/${book.Image[0]}`} />
                    <Book.Title>{book.Title}</Book.Title>
                    <Book.Price>R {book.minPrice}.00</Book.Price>
                    <Book.Watch BookId={book.BookId} />
                </Book.Card>
            )}
        </Book>
    )
}