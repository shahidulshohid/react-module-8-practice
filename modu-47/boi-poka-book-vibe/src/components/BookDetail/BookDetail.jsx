import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../Utility/AddToDB";

const BookDetail = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
    
    const book = data.find(book => book.bookId === id)
    console.log(book)
    const {bookId: currentBookId, image} = book
    // for read list
    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2. where to store: database
         * 4. array, list, collection
         * check: if the book is already in read list
         * if not, then add the book to the list 
         * if yes, don't add the book
         */
        addToStoredReadList(id)
    }
    // for wish list 
    const handleWishList = (id) => {
        addToStoredWishList(id)
    }
    return (
        <div>
            <h2>Book Details: {bookId}</h2>
            <img className="w-36 my-6" src={image} alt="" />
            <button onClick={()=>handleMarkAsRead(currentBookId)} className=" btn-outline mr-4 btn btn-accent">Mark as Read</button>
            <button onClick={()=>handleWishList(currentBookId)} className="btn btn-accent">Add to Wish List</button>
        </div>
    );
};

export default BookDetail;