import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {DetailPage} from "./pages/DetailPage";
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {AuthPage} from "./pages/AuthPage";




export const useRoutes = isAuthenticated => {

    if(isAuthenticated){
        return (
            <Routes>
                <Route exact path="/links" element={<LinksPage />} />
                <Route exact path="/create" element={<CreatePage />} />
                <Route exact path="/detail/:id" element={<DetailPage />} />
                <Route path="*" element={<Navigate to="/create" />} />
            </Routes>
        )
    }




    return (
        <Routes>
            <Route exact path="/" element={<AuthPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )







}