import Link from "next/link";

import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
            <h1 className="text-2xl font-medium">Not Found</h1>
            <h2 className="text-foreground/80 text-lg">Oops! The page you are looking for does not exist</h2>
            <Button asChild className="mt-5">
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
    );
};

export default NotFound;
