
import { Component, useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ClassCard from './components/ClassCard';
import FuncCard from './components/FuncCard';
import MessageCard from './components/MessageCard';
import StudentCard from './components/StudentCard';
import WishCard from './components/WishCard';
import WishMeassageCard from './components/WishMeassageCrad';
import WishMessage from './components/WishMessage';
//import ChildComponent from './component_interaction/ChildComponent';
import ParentComponent from './component_interaction/ParentComponent';
import EmployeeList from './conditional_list_render/EmployeeList';
import HobbySelector from './conditional_list_render/HobbySelector';
import UserMeassage from './conditional_list_render/UserMeassage';
import GreetingMessageTwo from './EventsBinding/GreetingMeassageTwo';
import GreetingMessage from './EventsBinding/GreetingMessage';
import ProductItem from './EventsBinding/ProductItem';
import WishMessageEvent from './EventsBinding/WishMessageEvent';
import ChangeSelectBox from './formsBinding/ChangeSelectBox';
import ChangeUserName from './formsBinding/ChangeUserName';
import ChangeUserNameBootStrap from './formsBinding/ChangeUserNameBootStrap';
import LoginForm from './formsBinding/LoginForm';
import RegisterNew from './formsBinding/RegisterNew';
import RegistrationForm from './formsBinding/RegistrationForm';
import ShowPassword from './formsBinding/ShowPassword';
import SMSapplication from './formsBinding/SMSapplication';
import AcceptTerms from './hooks_in_react/AcceptTerms';
import Auth_User from './hooks_in_react/Auth_User';
import ChangeUserName_Hooks from './hooks_in_react/ChangeUserName_Hooks';
import Change_select_Box from './hooks_in_react/Change_select_Box';
import ComponentA from './hooks_in_react/ComponentA';
import Counter from './hooks_in_react/Counter';
import DigitalWatch from './hooks_in_react/DigitalWatch';
import Employee_List_Hooks from './hooks_in_react/Employee_List_Hooks';
import HobbySelectorCheck from './hooks_in_react/HobbySelectorCheck';
import Login_Form from './hooks_in_react/Login_Form';
import Parent_Card from './hooks_in_react/Parent_Card';
import ProductItem_Hooks from './hooks_in_react/ProductItem_Hooks';
import Register1 from './hooks_in_react/Register1';
import Register_Hooks from './hooks_in_react/Register_Hooks';
import Show_Password from './hooks_in_react/Show_Password';
import SMS_Application from './hooks_in_react/SMS_Application';
import UserList from './hooks_in_react/UserList';
import WishMeassageuseReducer from './hooks_in_react/WishMessageUseReducer';
import WishMessage_Hooks from './hooks_in_react/WishMessage_Hooks';
import PizzaHut from './redux/PizzaHut';
//import { store } from './redux/Store';
import { store } from './redux_example/store';
import WishMessage_Redux from './redux_example/WishMessage_Redux';

function App() {

   let [userInfo,setUserInfo]=useState({
      Name:'priyanka Gadekar',
      Age:23
   })

  return (
    <div className="App">
     <h1>welcome to recat js</h1>
    {/*  <ClassCard/>
     <FuncCard/> */}
  {/*    <nav>
      <a href='./'>React js card with styling</a>
     </nav> */}

  {/*    <MessageCard/>
     <WishCard/> */}
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React js card with styling</a>
     </nav>
     <WishMessage  msg="Good Morning" time="10"/>
     <WishMeassageCard  msg="Good Afternoon" time="10"/>

     <StudentCard/>
   

     {/* Event Binding */}
     <WishMessageEvent/>
     <GreetingMessage/>
     <GreetingMessageTwo/>
     <ProductItem/>


     {/* React with form Binding */}
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React With Forms Binding</a>
     </nav>
     <ChangeUserName/>
     <ChangeUserNameBootStrap/>
     <ChangeSelectBox/>
     <SMSapplication/>
     <ShowPassword/>
     <LoginForm/>
     <RegistrationForm/>
     <RegisterNew/>

      {/* React Conditional and list rendering */}
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React Conditional and List Rendering</a>
     </nav>
     <UserMeassage/>
     <HobbySelector/>
     <EmployeeList/>

          {/* React Component Interaction */}

     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React With Component Interaction</a>
     </nav>
      <ParentComponent/>

      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React Hooks</a>
     </nav>
     <Counter/>
     <WishMessage_Hooks/>
     <ProductItem_Hooks/>
     <ChangeUserName_Hooks/>
     <Show_Password/>
     <Change_select_Box/>
     <SMS_Application/>
     <Login_Form/>
     <Register_Hooks/>

     
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>List Rendering</a>
     </nav>
     <Auth_User/>
     <HobbySelectorCheck/>
     <Employee_List_Hooks/>
     <Parent_Card/>

     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React Hooks with Props Drilling and Context API </a>
     </nav>
     <div className='container m-3'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body bg-dark text-white'>
              <p className='h3'>App Component</p>
              <small>{JSON.stringify(userInfo)}</small>
                 <ComponentA   userInfo={userInfo}/>
            </div>
          </div>
        </div>
      </div>
     </div>



{/*   UseEffect Hooks */}
     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React Hooks with Life Cycle and useEffect Hooks </a>
     </nav>
     <DigitalWatch/>
     <UserList/>



     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React Hooks useRef() and useReducer() </a>
     </nav>
     <Register1/>
     <AcceptTerms/>
     <WishMeassageuseReducer/>


     <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
      <a href='./' className='navbar-brand'>React Redux</a>
     </nav>
 {/*     <Provider store={store}>
           <PizzaHut/>
     </Provider> */}



{/*     <Provider store={store}>
    <WishMessage_Redux/>

    </Provider>
     */}


    </div>
  );
}

export default App;
