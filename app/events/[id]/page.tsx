import {Params, AsyncReactElement} from "@/types";
import React from "react";

export default async function Page({ params }: Params) : AsyncReactElement{
    const { id } = await params;
    console.log(id);

    return (
        <div>Id is : {id}</div>
    );
}