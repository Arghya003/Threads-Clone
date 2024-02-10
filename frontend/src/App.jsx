import React from "react"
import { Container } from '@chakra-ui/react'
//import { Button } from "@chakra-ui/button"
import { Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import { Route } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
const App = () => {
  return (
    <div>
      <Container maxW="620px"> 
      <Header/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
          <Route path="/auth" element={<AuthPage />} />
      <Route path="/:username" element={<UserPage/>}/>
       <Route path="/:username/post/:pid" element={<PostPage/>}/>
     </Routes>
      </Container>
       
     
    </div>
  )
}

export default App
