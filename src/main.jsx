import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import FirstNew from './components/FirstNew.jsx'
import LeftFocusedArticle from './components/LeftFocusedArticle.jsx'
import ArticleCard from './components/ArticleCard.jsx'
import Footer from './components/Footer.jsx'
import './components/fonts.css'
import CardGroupColor from './components/CardGroupColor.jsx'


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
