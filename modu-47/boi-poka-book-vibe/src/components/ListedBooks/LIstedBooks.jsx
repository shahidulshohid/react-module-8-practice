import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/AddToDB";
import Book from "../Book/Book";

const LIstedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')

  const allBooks = useLoaderData();
  //ideally will directly get the read book list from the database
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    //worst way
    console.log(storedReadList, storedReadListInt);

    const readBookList = allBooks.filter((book) => storedReadListInt.includes(book.bookId));
    setReadList(readBookList);
  }, []);

  const handleSort = sortType => {
    setSort(sortType)
    //
    if(sortType === 'Number of pages'){
      const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages)
      setReadList(sortedReadList)
    }
    if(sortType === 'ratings'){
      const sortedReadList = [...readList].sort((a, b)=> a.rating - b.rating)
      setReadList(sortedReadList)
    }
  } 

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          {
            sort ? `Sort by: ${sort}` : 'Sort by'
          }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={()=> handleSort('ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={()=>handleSort('Number of pages')}>
            <a>Number of page</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read list</Tab>
          <Tab>wish list</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books i read: {readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default LIstedBooks;
