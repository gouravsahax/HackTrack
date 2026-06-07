import React from "react";

export type Params = {
    params: Promise<{
        id: string;
    }>;
}

export type AsyncReactElement = Promise<React.JSX.Element>;

export type ReactElement = React.JSX.Element;