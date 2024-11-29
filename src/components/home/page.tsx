'use client';

import React, {useState} from "react";
import Ready from "./ready";
import Main from "./home";

const Home:React.FC = () => {
    const [pass, setPass] = useState<boolean>(false);
    return (
        <>
        {pass && <Main />}
        {!pass && <Ready setPass={setPass} />}
        </>
    )
}

export default Home;