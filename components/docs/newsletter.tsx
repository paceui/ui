"use client";

import { MailIcon, NewspaperIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

import { TextFallButton } from "@/components/gsap/text-fall-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ISubscribeResponse, subscribe } from "@/lib/docs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => emailRegex.test(email);

export const Newsletter = () => {
    const [result, setResult] = useState<ISubscribeResponse | undefined>(undefined);
    const [email, setEmail] = useState("");

    useEffect(() => {
        setResult(undefined);
    }, [email]);

    const onSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault();
        if (email.length == 0 || !isValidEmail(email)) {
            setResult({
                success: false,
                message: "Please enter a valid email",
            });
            return;
        }
        const res = await subscribe({ email: email });
        setResult(res);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="bg-foreground/3 relative flex flex-col items-center overflow-hidden rounded px-3 py-4 text-center sm:px-8 sm:py-6 xl:px-16">
            <NewspaperIcon className="text-foreground/5 absolute top-4 left-4 -z-1 size-12 -rotate-45" />
            <p className="text-lg/none font-medium">Join our newsletter!</p>
            <div className="mt-3 flex items-center gap-2 sm:mt-4 sm:gap-3">
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    className="bg-background w-52 shadow-none sm:w-72"
                    placeholder="mail@site.com"
                />
                <Button type="submit" className="sm:hidden cursor-pointer" size="icon">
                    <MailIcon />
                </Button>
                <Button
                    type="submit"
                    className="cursor-pointer max-sm:hidden">
                    Subscribe
                </Button>
            </div>
            {result && !result.success && <span className="text-destructive text-xs sm:text-sm">{result.message}</span>}
            {result && result.success && <span className="text-xs text-green-500 sm:text-sm">{result.message}</span>}
            <p className="text-muted-foreground mt-2 text-xs">We only send important updates. never spam!</p>
        </form>
    );
};
