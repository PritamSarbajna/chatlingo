import React, { useEffect, useState } from 'react';
import ChatMessages from './ChatMessages';

const ChatRecipient = () => {


  const [activeRecipient, setActiveRecipient] = useState(null);

  const [chatInfo, setChatInfo] = useState([]);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState('');

  const userdata = JSON.parse(localStorage.getItem('userdata'));

  const adder_email = userdata.email;
  const adder_name = userdata.full_name;

  const AddEmails = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://chatlingo-backend-ten.vercel.app/add_user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_email: email,
                adder_email: adder_email,
                adder_name: adder_name,
              }),
            });
      
            if (response.ok) {
              const data = await response.json();
              console.log(data);

              setChatInfo((prevChatInfo) => [
                ...prevChatInfo,
                { email: email, name: data.name },
              ]);
        
              // Clear the email input
              setEmail('');
              // handleLogin(data);
              // setError(null);
              // // Store user authentication data in localStorage
              // localStorage.setItem('userdata', JSON.stringify(data));
              // navigate('/');
            } else {
            errorData = await response.json();
            //   setError(errorData.detail);
            console.log(errorData);
            }
          } catch (error) {
            setError('An error occurred. Please try again.');
          }
    }

    useEffect(() => {
      const fetchChatInfo = async () => {
        try {
          const response = await fetch(`https://chatlingo-backend-ten.vercel.app/get_chat_info?adder_email=${encodeURIComponent(adder_email)}`);
          if (response.ok) {
            const data = await response.json();
            setChatInfo(data.chat_info);
          } else {
            setError('Failed to fetch chat info.');
          }
        } catch (error) {
          setError('An error occurred. Please try again.');
        }
      };
  
      fetchChatInfo();
    }, [adder_email]);

    const HandleChat = (chat_id) => {
      setActiveRecipient(chat_id);
    };

  return (
    <>
    <div>
        <aside className="flex">
        
        <div className="h-screen w-2/6 py-8 overflow-y-auto bg-white border-l border-r dark:bg-gray-900 dark:border-gray-700">
        <div className='mt-20'>
            <div className="relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg px-5">
                <input className="peer w-full rounded-r-lg border border-slate-400 px-2 text-[#ccc] placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none" type="email" name="email" id="email" placeholder="Type email of the user..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={AddEmails} className="flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white">ADD</button>
            </div>
          </div>
          <h2 className="px-5 py-4 text-lg font-medium text-gray-800 dark:text-white">Accounts</h2>

          <div className=" space-y-4">
          {chatInfo.map((chat) => (
            <button
              onClick={() => HandleChat(chat.chat_id)}
              key={chat.email}
              className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none"
            >
              <img
                src="https://img.icons8.com/fluency/48/000000/user-female-circle.png"
                alt="user-female-circle"
              />
              <div className="text-left rtl:text-right">
                <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">
                  {chat.name}
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">{chat.email}</p>
              </div>
            </button>
          ))}
            {/* <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 gap-x-2 focus:outline-none">
              <div className="relative">
              <img src="https://img.icons8.com/fluency/48/000000/user-female-circle.png" alt="user-female-circle" />
                <span className="h-2 w-2 rounded-full bg-emerald-500 absolute right-0.5 ring-1 ring-white bottom-0" />
              </div>
              <div className="text-left rtl:text-right">
                <h1 className="text-xl font-medium text-gray-700 capitalize dark:text-white">Olivia Wathan</h1>
                <p className="text-lg text-gray-500 dark:text-gray-400">8.6 Followers</p>
              </div>
            </button> */}
          </div>
        </div>
      </aside>
    </div>

    {activeRecipient? (
          <ChatMessages recipientId={activeRecipient} />
        ): (
          <div className="min-h-screen flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen w-2/3 top-0 right-0 fixed">
            <h2 className='text-[#fff] text-center'>NO Chats here</h2>
          </div>
        )}

    </>
  )
}

export default ChatRecipient