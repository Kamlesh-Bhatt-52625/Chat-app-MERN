import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSeacrh] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSeacrh("");
    } else {
      toast.error("No such user found!");
    }
  };

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Search...'
        className='input input-bordered rounded-full sm:w-auto w-0'
        value={search}
        onChange={(e) => setSeacrh(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  );
};

export default SearchInput;
