import { MapPinIcon, StarIcon } from "lucide-react";

import { ProfilePeek } from "@/components/gsap/profile-peek";

export const Demo = () => {
    return (
        <div className="mb-24 flex items-center -space-x-4">
            <ProfilePeek
                trigger={
                    <img
                        src="/images/avatars/1.jpg"
                        alt="Avatar"
                        className="size-12 cursor-pointer rounded-full object-cover"
                    />
                }
                content={
                    <div className="bg-card w-80 rounded-md p-4 shadow-sm">
                        <div className="ms-16">
                            <h3 className="mt-1 text-xl/none font-medium">Alex Thompson</h3>
                            <p className="text-foreground/60 mt-1 text-sm/none">Product Designer at Loom</p>
                        </div>
                        <p className="text-foreground/80 mt-4 text-[15px] leading-tight">
                            Used many design systems, but this one saved time. Components worked across themes.
                        </p>
                        <div className="-mx-4 mt-3 border-t"></div>
                        <div className=""></div>
                        <div className="text-foreground/80 mt-3 flex items-center justify-between gap-2 text-sm tracking-tight">
                            <div className="flex items-center gap-1.5">
                                <MapPinIcon className="size-3.5" />
                                <span>San Francisco, CA</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                                <StarIcon className="size-3.5 text-orange-500" />
                                <StarIcon className="size-3.5 text-orange-500" />
                                <StarIcon className="size-3.5 text-orange-500" />
                                <StarIcon className="size-3.5 text-orange-500" />
                                <StarIcon className="size-3.5 text-orange-500" />
                            </div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};
