import React from "react";

import { Title } from "./Title";
import { SiteNavigation } from "./SiteNavigation";

export const Header = () => {
    return(
        <header>
            <Title />
            <SiteNavigation />
        </header>
    );
};