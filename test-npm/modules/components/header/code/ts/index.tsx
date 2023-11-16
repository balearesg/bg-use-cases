import * as React from 'react';
import { useTexts } from '@beyond-js/react-18-widgets/hooks';
import { module } from "beyond_context";

export /*bundle*/ function Header(): JSX.Element {
    const [ready, texts]: [boolean, any] = useTexts(module.specifier);

    if (!ready) return null;
    return (
        <header>{texts.title}</header>
    )
};
