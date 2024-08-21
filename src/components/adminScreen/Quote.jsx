import React, { useEffect, useState } from "react";
import { quoteSchema } from "./schema/schema";
import {
  LockClosedIcon,
  PencilAltIcon,
  PencilIcon,
  TrashIcon,
  XIcon,
} from "@heroicons/react/outline";

const Quote = ({ isSidebarOpen }) => {
  // const formik = useFormik({
  //   initialValues: {
  //     quote: "",
  //     authorName: "",
  //   },
  //   validationSchema: quoteSchema,
  //   onSubmit: (values, actions) => {
  //     actions.resetForm();
  //     alert("Form submitted successfully");
  //     console.log("submitted");
  //   },
  // });

  const [authorName, setAuthorName] = useState("");
  const [quote, setQuote] = useState("");
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/quotes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setQuotes(quotes.filter((quote) => quote.id !== id));
      } else {
        setError("Failed to delete quote.");
      }
    } catch (err) {
      setError("Error deleting quote.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ authorName, quote }),
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Quote posted", result);
        setQuotes([...quotes, result]);
        setAuthorName("");
        setQuote("");
      } else {
        console.log("fail");
      }
    } catch (err) {
      console.log("eror", err);
    }
  };
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quotes");
        if (response.ok) {
          const result = await response.json();
          setQuotes(result);
        } else {
          console.log("failed to fetch");
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchQuote();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-[40%]">
          <h1 className="text-center text-6xl font-bold pb-5">Quote</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <>
              <label className="text-lg font-medium text-gray-700">
                Author Name
              </label>
              <input
                id="authorName"
                className="rounded-xl"
                placeholder="Enter the author name"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </>
            <>
              <label className="text-lg font-medium text-gray-700">Quote</label>
              <textarea
                id="quote"
                className="rounded-xl"
                placeholder="Enter the quote"
                type="text"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </>
            <button className="border-blue-600 bg-blue-600 hover:border-blue-600 hover:bg-transparent hover:text-blue-600 py-2 text-xl rounded-xl">
              Post
            </button>
          </form>
        </div>
      </div>
      <div className="p-5">
        <h1 className=" text-3xl font-bold">Recent Quotes</h1>
        <div className="h-96 overflow-auto">
          {quotes.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-300 rounded-xl flex justify-between items-start"
            >
              <div className="w-[80%]">
                {/* <p>{item.id}</p> */}
                <p className="text-xl font-semibold">{item.authorName}</p>
                <p className="text-lg">{item.quote}</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="flex justify-end cursor-pointer gap-3">
                  <PencilAltIcon
                    className="w-5 text-green-400 hover:scale-125"
                    onClick={() => setEditOpen(!editOpen)}
                  />
                  <TrashIcon
                    className="w-5 text-red-500 hover:scale-125"
                    onClick={() => handleDelete(item.id)}
                  />
                </p>
                <p className="text-sm text-gray-500 flex justify-end ">
                  {formatDate(item.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {editOpen && (
          <>
            <div className="w-full h-full z-50 fixed top-0 left-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
              <div className="text-6xl font-black">
                <div className="h-1/2 w-1/2 bg-black">hello</div>
                <XIcon
                  className="w-5 text-black hover:scale-125 cursor-pointer "
                  onClick={() => setEditOpen(!editOpen)}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Quote;
