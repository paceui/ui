import { MapPinIcon, StarIcon } from "lucide-react";

import { ProfilePeek } from "@/components/gsap/profile-peek";

const data = [
    {
        image: "/images/avatars/1.jpg",
        name: "Alex Thompson",
        role: "Product Designer at Loom",
        comment: "Impressed by how consistent and theme-ready everything is. It’s fast, clean, and reliable.",
        location: "San Francisco, CA",
    },
    {
        image: "/images/avatars/2.jpg",
        name: "Maria Nguyen",
        role: "Frontend Engineer at Linear",
        comment: "The components saved us weeks. They just work, even under heavy layout and theme shifts.",
        location: "New York, NY",
    },
    {
        image: "/images/avatars/3.jpg",
        name: "Denish Navadiya",
        role: "Solo Designer & Developer",
        comment: "I build faster. The library cuts fatigue and feels solid from dev to polish",
        location: "Ahmedabad, India",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Shadcn",
        role: "Work at Vercel",
        comment: "Would love a short testimonial for my UI library if you find it worth sharing.",
        location: "At Home",
    },
];

const Testimonials1 = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 -z-2 bg-white" />
            <div className="absolute inset-0 -z-1 bg-[url(/images/demo/gradient-3.jpg)] bg-bottom opacity-30" />
            <div className="container px-4 py-48 sm:px-6 lg:px-12 xl:px-24 xl:py-64">
                <p className="text-lg font-medium text-black/70 sm:text-center">Soon trusted by many</p>
                <div className="mt-6 flex items-center -space-x-5 sm:justify-center">
                    {data.map((item, index) => (
                        <ProfilePeek
                            key={index}
                            trigger={
                                <img
                                    src={item.image}
                                    alt="Avatar"
                                    className="size-14 cursor-pointer rounded-full border-3 border-white object-cover"
                                />
                            }
                            content={
                                <div className="bg-card w-80 rounded-md p-4 shadow-sm">
                                    <div className="ms-18">
                                        <h3 className="mt-2 text-xl/none font-medium">{item.name}</h3>
                                        <p className="text-foreground/60 mt-1 leading-none">{item.role}</p>
                                    </div>
                                    <p className="text-foreground/80 mt-4.5 text-[15px]">{item.comment}</p>
                                    <div className="-mx-4 mt-3 border-t"></div>
                                    <div className="text-foreground/80 mt-3 flex items-center justify-between gap-2 text-sm tracking-tight">
                                        <div className="flex items-center gap-1.5">
                                            <MapPinIcon className="size-3.5" />
                                            <span>{item.location}</span>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials1;
