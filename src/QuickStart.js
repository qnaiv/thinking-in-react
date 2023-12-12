import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 120,
};

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      {count}
    </button>
  );
}

function FormComponent() {

  const formData = {
    name: "A",
    birthday: "01/01"
  };

  const [form, setCount] = useState(formData);

  let inputName = "";
  let inputBirthDay = "";

  function handleClick() {
    const newFormData = {
      name: "B",
      birthday: "2/2"
    }

    setCount(newFormData);
  }

  return (
      <>
      {/* name<input type='text' value={inputName}></input>  
      birth<input type='text' value={inputBirthDay}></input>   */}
      <button onClick={handleClick}>save</button>
      <p>{form.name}</p>
      <p>{form.birthday}</p>
      </>
  );
}

function Profile() {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}

const isLoggedIn = false;

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
      {product.title}  </li>

  );

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      hello
      <div className="App">
        <div class="test">font red</div>
        <header className="App-header">

          <ul>
            {
              products.map(product =>
                <li key={product.id}>
                  {product.title}  </li>
              )
            }
          </ul>
          
          {isLoggedIn ? <Profile /> : <MyButton />}
          {isLoggedIn && <MyButton />}
          
          <MyButton count={count} onClick={handleClick} />
          <MyButton count={count} onClick={handleClick} />
      </header>
    </div>
    </>
  );
}

export default App;
