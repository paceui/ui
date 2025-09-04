"use client"

import { ArrowRightIcon, CornerDownLeftIcon, SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { SidebarNavItem } from "@/components/docs/layouts/sidebar";
import { Dialog, DialogContent,  DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

export const Searchbar = ({ menuItems }: { menuItems: SidebarNavItem[] }) => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return menuItems.flatMap((item) => (item.comingSoon ? [] : item.items)).filter((e) => e != undefined);
    }, [menuItems]);

    const filteredItems = useMemo(()=>{
        const searchTerm = search.toLowerCase().trim();
        if(searchTerm.length == 0){
            return items;
        }else{
            return items.filter((item) => {
                return item.title.toLowerCase().includes(searchTerm);
            })
        }
    }, [search, items]);

    const goToPage = (menuItem: SidebarNavItem) => {
        if(menuItem.href){
            router.push(menuItem.href);
        }
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="bg-muted text-muted-foreground flex sm:w-44 cursor-pointer items-center gap-2 rounded-md px-2.5 sm:py-1.5 py-2.5">
                    <SearchIcon className="size-4" />
                    <p className="text-sm max-sm:hidden">Search</p>
                </div>
            </DialogTrigger>
            <DialogContent className="p-0 space-y-0 sm:max-w-120" showCloseButton={false}>
                <DialogTitle className="sr-only">
                    <p>Search documentation...</p>
                </DialogTitle>
                <div>
                    <div className="px-2 pt-2">
                        <div className="bg-muted flex items-center gap-2 rounded-md px-2.5 py-2 border">
                            <SearchIcon className="text-muted-foreground size-4" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="placeholder:text-muted-foreground grow text-sm outline-0"
                                placeholder="Search documentation..."
                            />
                        </div>
                        <ScrollArea className="h-80">
                           <div className="my-2">
                               {filteredItems.map((item, index) => <div key={index} className="flex border items-center gap-2 px-2.5 py-1 cursor-pointer hover:bg-muted rounded-md border-transparent hover:border-border" onClick={()=>goToPage(item)}>
                                   <ArrowRightIcon className="size-4 text-muted-foreground"/>
                                   <p>{item.title}</p>
                               </div>)}
                           </div>
                        </ScrollArea>
                    </div>
                    <div className="bg-muted flex items-center gap-2 rounded-b-lg px-2.5 py-1.5">
                        <div className="flex items-center gap-2">
                            <div className="bg-card flex items-center justify-center rounded-sm border p-1">
                                <CornerDownLeftIcon className="size-3.5" />
                            </div>
                            <p className="text-muted-foreground text-sm">Go to page</p>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
