import React from "react";
import Error from '../assets/images/404.gif'

const NotFoundPage = () => {
    return (
        <body class="vh-100 col-md-5 col-sm-8 mx-auto d-flex flex-column">
            <img class="w-100" src={Error} />
            <div class="text-center"><a class="h2 text-dark" href="/home">You are a lost, come back to page Home</a>.</div>
        </body>
    )
}

export default NotFoundPage;