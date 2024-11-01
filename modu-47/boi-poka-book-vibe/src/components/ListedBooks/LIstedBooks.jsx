import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/AddToDB";
import Book from "../Book/Book";

const LIstedBooks = () => {
    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData()
    //ideally will directly get the read book list from the database
    
    useEffect(()=>{
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        //worst way
        console.log(storedReadList, storedReadListInt)

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setReadList(readBookList)
    }, [])

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read list</Tab>
          <Tab>wish list</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books i read: {readList.length}</h2>
          {
            readList.map(book => <Book key={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default LIstedBooks;
