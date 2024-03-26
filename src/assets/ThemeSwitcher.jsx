import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { SunIcon } from "./sunIcon";
import { MoonIcon } from "./MoonIcon";

export function ThemeSwitcher() {
    const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark');
        }
        else {
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <Switch
                defaultSelected
                size="lg"
                color="primary"
                onClick={toggle_mode}
                thumbIcon={(className) =>
                    theme === "dark" ? <SunIcon className={className} />
                        : <MoonIcon className={className} />
                }
            >

            </Switch>
        </>
    )
};