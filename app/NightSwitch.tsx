"use client";

import { Switch } from '@headlessui/react';
import { useEffect, useState } from 'react';

export default function NightSwitch() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        // the night mode is determined based on these rules:
        // 1. if the user has already set the night mode, use that
        // 2. if the user has system preferences set to dark mode, use dark mode
        // 3. otherwise use light mode
        const nightModeStored = localStorage.getItem('night-mode');
        if (nightModeStored) {
            setEnabled(nightModeStored === 'true');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setEnabled(true);
            localStorage.setItem('night-mode', 'true');
        }
    }, []);

    // set the night mode and store it in local storage
    const setEnabledAndStore = (enabled: boolean) => {
        setEnabled(enabled);
        localStorage.setItem('night-mode', enabled.toString());
    };

    return (
        <Switch
            checked={enabled}
            onChange={setEnabledAndStore}
            className={
                (enabled ? 'bg-indigo-600' : 'bg-gray-200') +
                ' relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
            }
        >
            <span className="sr-only">Use setting</span>
            <span
                className={
                    (enabled ? 'translate-x-5' : 'translate-x-0') +
                    ' pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                }
            >
                <span
                    className={
                        (enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in') +
                        ' absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    }
                    aria-hidden="true"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-yellow-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>

                </span>
                <span
                    className={
                        (enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out') +
                        ' absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    }
                    aria-hidden="true"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-3 h-3 text-indigo-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>

                </span>
            </span>
        </Switch>
    )
}