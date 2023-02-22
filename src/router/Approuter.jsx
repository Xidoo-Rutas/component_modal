import * as React from "react";
import { Route, Routes } from "react-router-dom"
import { Modal } from "../assets/Modal/Modal";


export const Approuter = () => {
  return (
    <>
        <Routes>
            <Route path="modal" element={ <Modal /> } />
        </Routes>
    </>
  )
}