import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import './components/fonts.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ArticleCard from './components/ArticleCard.jsx';
import Footer from './components/Footer.jsx';
import CardGroupColor from './components/CardGroupColor.jsx';
import FirstNew from './components/FirstNew.jsx';
import LeftFocusedArticle from './components/LeftFocusedArticle.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <FirstNew/>
    <ArticleCard/>    
    <LeftFocusedArticle/>
    <CardGroupColor/>
    <Footer/>
  </React.StrictMode>,
)
