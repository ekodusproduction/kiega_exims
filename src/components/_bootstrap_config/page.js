"use client";
import React, { useEffect } from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function BootstrapConfig(){

    useEffect(() => {require('bootstrap/dist/js/bootstrap.min.js')},[])

    return null;
}