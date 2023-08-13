import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Register = () => {

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Español' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' },
        { code: 'it', name: 'Italiano' },
        { code: 'ja', name: '日本語' },
        { code: 'ko', name: '한국어' },
        { code: 'ru', name: 'Русский' },
        { code: 'zh', name: '中文' },
        { code: 'ar', name: 'العربية' },
        { code: 'pt', name: 'Português' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'tr', name: 'Türkçe' },
        { code: 'pl', name: 'Polski' },
        { code: 'sv', name: 'Svenska' },
        { code: 'no', name: 'Norsk' },
        { code: 'fi', name: 'Suomi' },
        { code: 'da', name: 'Dansk' },
        { code: 'uk', name: 'Українська' },
        { code: 'el', name: 'Ελληνικά' },
        { code: 'cs', name: 'Čeština' },
        { code: 'he', name: 'עברית' },
        { code: 'ro', name: 'Română' },
        { code: 'hu', name: 'Magyar' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'th', name: 'ไทย' },
        { code: 'id', name: 'Bahasa Indonesia' },
        { code: 'hi', name: 'हिन्दी' },
        { code: 'bn', name: 'বাংলা' },
        { code: 'ta', name: 'தமிழ்' },
        { code: 'fa', name: 'فارسی' },
        { code: 'ms', name: 'Bahasa Melayu' },
        { code: 'sk', name: 'Slovenčina' },
        { code: 'hr', name: 'Hrvatski' },
        { code: 'bg', name: 'Български' },
        { code: 'lt', name: 'Lietuvių' },
        { code: 'sr', name: 'Српски' },
        { code: 'et', name: 'Eesti' },
        { code: 'lv', name: 'Latviešu' },
        { code: 'sl', name: 'Slovenščina' },
        { code: 'ga', name: 'Gaeilge' },
        { code: 'eu', name: 'Euskara' },
        { code: 'af', name: 'Afrikaans' },
        { code: 'am', name: 'አማርኛ' },
        { code: 'as', name: 'অসমীয়া' },
        { code: 'az', name: 'Azərbaycan dili' },
        { code: 'be', name: 'Беларуская' },
        { code: 'bs', name: 'Bosanski' },
        { code: 'ca', name: 'Català' },
        { code: 'cy', name: 'Cymraeg' },
        { code: 'eo', name: 'Esperanto' },
        { code: 'gd', name: 'Gàidhlig' },
        { code: 'gl', name: 'Galego' },
        { code: 'gu', name: 'ગુજરાતી' },
        { code: 'ht', name: 'Kreyòl Ayisyen' },
        { code: 'hy', name: 'Հայերեն' },
        { code: 'is', name: 'Íslenska' },
        { code: 'jv', name: 'Basa Jawa' },
        { code: 'kk', name: 'Қазақ тілі' },
        { code: 'km', name: 'ភាសាខ្មែរ' },
        { code: 'ku', name: 'Kurdî' },
        { code: 'ky', name: 'Кыргызча' },
        { code: 'lb', name: 'Lëtzebuergesch' },
        { code: 'lo', name: 'ລາວ' },
        { code: 'mk', name: 'Македонски' },
        { code: 'mn', name: 'Монгол' },
        { code: 'mt', name: 'Malti' },
        { code: 'my', name: 'ဗမာစာ' },
        { code: 'ne', name: 'नेपाली' },
        { code: 'pa', name: 'ਪੰਜਾਬੀ' },
        { code: 'rw', name: 'Kinyarwanda' },
        { code: 'si', name: 'සිංහල' },
        { code: 'sw', name: 'Kiswahili' },
        { code: 'te', name: 'తెలుగు' },
        { code: 'uz', name: 'Oʻzbekcha' },
        { code: 'xh', name: 'IsiXhosa' },
        { code: 'yi', name: 'ייִדיש' },
        { code: 'yo', name: 'Yorùbá' },
        { code: 'zu', name: 'IsiZulu' },
      ];

    const { handleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [langChoice, setLangChoice] = useState(languages[0].code);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const HandleLoginButton = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://chatlingo-backend-ten.vercel.app/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ 
                full_name: name,
                language_choice: langChoice,
                email: email,
                password: password
               }),
            });
      
            if (response.ok) {
              const data = await response.json();
              handleLogin(data);
              setError(null);
              // Store user authentication data in localStorage
              localStorage.setItem('userdata', JSON.stringify(data));
              navigate('/');
            } else {
              const errorData = await response.json();
              setError(errorData.detail);
            console.log(errorData);
            }
          } catch (error) {
            setError('An error occurred. Please try again.');
          }
    }

  return (
    <>
    <div className="bg-no-repeat bg-cover bg-center relative bg-[#28185d]" style={{backgroundImage: 'url()'}}>

        <div className="min-h-screen sm:flex sm:flex-row mx-10 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              {/* <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back Aji </h1>
              <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups</p> */}
                <img className='w-max h-max' src="/bg.png" alt="" />
            </div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 z-10">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                <p className="text-gray-500">Please register your account.</p>
              </div>
              {
                error && 
                <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>
              }
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">Full Name</label>
                  <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                  <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="mail@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="space-y-2">
                    <label className='text-sm font-medium text-gray-700 tracking-wide' htmlFor="language">Select Language:</label>
                    <select className='mx-4 outline-none p-1 rounded-lg' id="language" value={langChoice} onChange={(e) => setLangChoice(e.target.value)}>
                        {languages.map((language) => (
                        <option key={language.code} value={language.code}>
                            {language.name}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link to="/login" className="text-[#7a57ea] hover:text-[#4e3798]">
                      Sign in here
                    </Link>
                  </div>
                </div>
                <div>
                  <button onClick={HandleLoginButton} className="w-full flex justify-center bg-[#3f2691]  hover:bg-[#7a60cf] text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register