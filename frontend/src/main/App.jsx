import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../auth/AuthContext';
import PrivateRoute from '../auth/PrivateRoute';

import Login from '../components/user/LoginForm';
import Register from '../components/user/RegisterForm';
import UserCrud from '../components/user/UserCrud';
import Home from '../components/home/Home';

import MainLayout from '../components/template/MainLayout';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    {/* Rotas públicas */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Rotas privadas com layout padrão */}
                    <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <MainLayout>
                                    <Home />
                                </MainLayout>
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="/users"
                        element={
                            <PrivateRoute>
                                <MainLayout>
                                    <UserCrud />
                                </MainLayout>
                            </PrivateRoute>
                        }
                    />

                    {/* Redirecionamento padrão */}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
