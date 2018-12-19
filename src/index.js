import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = [
    {
      name:"Frank Solleveld",
      avatar_url:"https://avatars3.githubusercontent.com/u/10637868?v=4",
      company:"Unreal Engine"
    },
    {
      name:"Justin de Ruiter",
      avatar_url:"https://avatars0.githubusercontent.com/u/5073994?v=4",
      company:"Self employed"
    },
    {
      name:"Hugo Caminada",
      avatar_url:"https://avatars0.githubusercontent.com/u/32323786?v=4",
      company:"Hogeschool Rotterdam"
    }
  ]

ReactDOM.render(<App cards={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
