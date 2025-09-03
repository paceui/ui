"use client";

import { useEffect, useState } from "react";

import { Swap, SwapProps } from "@/components/gsap/swap";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const pad = (num: number) => num.toString().padStart(2, "0");

    return [pad(hours), pad(minutes), pad(seconds), amOrPm];
};

type SwapEffect = NonNullable<SwapProps["effects"]>[number]

const preEffects: SwapEffect[] = ["slideUp", "slideDown", "grayscale", "opacity", "blur"];

export const Demo = () => {
    const [date, setDate] = useState(new Date());
    const [effects, setEffects] = useState<SwapEffect[]>(["slideUp", "opacity"]);

    const [hours, minutes, seconds, amOrPm] = formatTime(date);

    const onChangeEffect = (item: SwapEffect) => {
        let eff = [...effects];
        if(item=="slideUp" || item=="slideDown"){
            eff = effects.filter(i => i !== "slideDown" && i !== "slideUp");
        }
        if (eff.includes(item)) {
            eff = eff.filter(i => i !== item);
        } else {
            eff = [...eff, item];
        }
        setEffects([...eff]);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        });
        return () => clearInterval(interval);
    }, []);
    return (
        <div>
            <div className="flex items-center gap-3 overflow-hidden py-1">
                <div className="flex items-end gap-1">
                    <Swap state={hours} effects={effects} duration={0.5}>
                        {(state) => <p className="font-mono text-3xl font-medium">{state}</p>}
                    </Swap>
                    <p className="text-muted-foreground text-sm">Hours</p>
                </div>
                <div className="flex items-end gap-1">
                    <Swap state={minutes} effects={effects} duration={0.5}>
                        {(state) => <p className="font-mono text-3xl font-medium">{state}</p>}
                    </Swap>
                    <p className="text-muted-foreground text-sm">Minutes</p>
                </div>
                <div className="flex items-end gap-1">
                    <Swap state={seconds} effects={effects} duration={0.5}>
                        {(state) => <p className="font-mono text-3xl font-medium">{state}</p>}
                    </Swap>
                    <p className="text-muted-foreground text-sm">Seconds</p>
                </div>
                <Swap state={amOrPm} effects={effects} duration={0.5}>
                    {(state) => <p className="font-mono text-3xl font-medium">{state}</p>}
                </Swap>
            </div>
            <div className="mt-8 w-44">
                <p className="font-medium text-muted-foreground">Effects</p>
                <div className="space-y-1 mt-2">
                    {preEffects.map((effect, index) => (
                        <div key={index} className="flex items-center gap-2 cursor-pointer" >
                            <Checkbox id={`effect-${effect}`} checked={effects?.includes(effect)} onCheckedChange={()=>onChangeEffect(effect)} />
                            <Label className="font-normal text-base" htmlFor={`effect-${effect}`}>{effect}</Label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
