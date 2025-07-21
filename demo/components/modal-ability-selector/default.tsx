import { ArrowUpIcon } from "lucide-react";

import { ModalAbilitySelector } from "@/components/ai/modal-ability-selector";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Demo = () => {
    return (
        <div className="bg-card max-w-2xl grow rounded border">
            <Textarea
                className="h-36 resize-none appearance-none border-none shadow-none !ring-0"
                placeholder="What’s on your mind? I’ll decode it instantly 🤖"
            />
            <div className="flex items-center justify-between p-3">
                <ModalAbilitySelector />
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        88
                        <p className="text-muted-foreground text-sm">/1000</p>
                    </div>
                    <Button className="text-primary-foreground size-8 cursor-pointer">
                        <ArrowUpIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};
