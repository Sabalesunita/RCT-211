import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './Login'
import { Boooks } from './Boooks'
import { EditBooks } from './EditBooks'
import { SingleBooks } from './SingleBooks'
import { RequireAuth } from '../components/RequireAuth'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Boooks />} />
      <Route path="/books/:id" element={<SingleBooks />} />
      <Route path="/books/:id/edit" element={<RequireAuth><EditBooks /></RequireAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}
