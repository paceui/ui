"use client";

import { PlusIcon, XCircleIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import { FlipReveal, FlipRevealItem } from "@/components/gsap/flip-reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type IProduct = {
    sku: string;
    image: string;
    name: string;
    category: string;
    price: number;
};

const products: IProduct[] = [
    {
        sku: "TEE-WHT-CLSC",
        image: "https://images.unsplash.com/photo-1696086152504-4843b2106ab4?q=80&w=300",
        name: "Classic White Tee",
        category: "Apparel",
        price: 20,
    },
    {
        sku: "GLS-WHT-RETRO",
        image: "https://images.unsplash.com/photo-1648688135643-2716ec8f4b24?q=80&w=300",
        name: "Retro White Shades",
        category: "Eyewear",
        price: 30,
    },
    {
        sku: "SHO-TAN-STRAP",
        image: "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?q=80&w=300",
        name: "Tan Strap Sneakers",
        category: "Footwear",
        price: 65,
    },
    {
        sku: "GLS-AVIATOR",
        image: "https://images.unsplash.com/photo-1632168844625-b22d7b1053c0?q=80&w=300",
        name: "Aviator Style Sunglasses",
        category: "Eyewear",
        price: 40,
    },
    {
        sku: "TEE-BLK-JET",
        image: "https://images.unsplash.com/photo-1583656346517-4716a62e27b7?q=80&w=300",
        name: "Jet Black Tee",
        category: "Apparel",
        price: 22,
    },
    {
        sku: "RUN-WHT-SLEEK",
        image: "https://images.unsplash.com/photo-1596480370804-cff0eed14888?q=80&w=300",
        name: "Sleek White Runners",
        category: "Footwear",
        price: 75,
    },
    {
        sku: "SHIRT-BLU-CASL",
        image: "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=300",
        name: "Casual Blue Shirt",
        category: "Apparel",
        price: 28,
    },
    {
        sku: "SNKRS-EVRDY",
        image: "https://images.unsplash.com/photo-1696086152508-1711cc7bcc9d?q=80&w=300",
        name: "Everyday Sneakers",
        category: "Footwear",
        price: 60,
    },
    {
        sku: "GLS-CRYSTAL",
        image: "https://images.unsplash.com/photo-1684790369514-f292d2dffc11?q=80&w=300",
        name: "Crystal Frame Glasses",
        category: "Eyewear",
        price: 35,
    },
    {
        sku: "DRS-RED-ELEGNT",
        image: "https://images.unsplash.com/photo-1589810635657-232948472d98?q=80&w=300",
        name: "Elegant Red Dress",
        category: "Apparel",
        price: 50,
    },
    {
        sku: "LGG-RED-YOGA",
        image: "https://images.unsplash.com/photo-1590159983013-d4ff5fc71c1d?q=80&w=300",
        name: "Red Yoga Leggings",
        category: "Activewear",
        price: 35,
    },
    {
        sku: "HPHN-PNK-BLSH",
        image: "https://images.unsplash.com/photo-1617460237920-ea0b1bad4b0a?q=80&w=300",
        name: "Blush Pink Headphones",
        category: "Audio",
        price: 90,
    },
    {
        sku: "EARBDS-WIRELS",
        image: "https://images.unsplash.com/photo-1614288064424-11d2d386c474?q=80&w=300",
        name: "Wireless Earbuds",
        category: "Audio",
        price: 60,
    },
    {
        sku: "WTCH-BRN-ANLG",
        image: "https://images.unsplash.com/photo-1650779456233-fc579766337c?q=80&w=300",
        name: "Analog Leather Watch",
        category: "Accessories",
        price: 110,
    },
    {
        sku: "WTCH-APL-SMRT",
        image: "https://images.unsplash.com/photo-1704942968209-6c1e05ef3f95?q=80&w=300",
        name: "Smart Fitness Watch",
        category: "Accessories",
        price: 150,
    },
];

const categories = [...new Set(products.map((item) => item.category))];

const ProductFilter1 = () => {
    const [filter, setFilter] = useState({
        search: "",
        category: "",
    });

    const isEligible = useCallback(
        (product: IProduct) => {
            const search = filter.search?.toLowerCase() ?? "";
            const category = filter.category;

            const matchesSearch = search.length === 0 || product.name.toLowerCase().includes(search);
            const matchesCategory = !category || product.category === category;

            return matchesSearch && matchesCategory;
        },
        [filter],
    );

    const visibleProductKeys = useMemo(() => {
        if (!filter.search && !filter.category) return ["all"];

        return products.filter(isEligible).map((product) => product.sku);
    }, [filter.category, filter.search, isEligible]);

    return (
        <div className="bg-background container min-h-280 py-4 sm:py-8 xl:py-16">
            <div className="flex flex-col items-center">
                <h2 className="text-2xl font-medium sm:text-3xl lg:text-4xl">Browse Products</h2>
                <p className="text-muted-foreground mt-1 max-w-md text-center max-sm:text-sm">
                    Find what you need by filtering through our selection of items across categories.
                </p>
            </div>
            <div className="mt-4 flex gap-4 rounded-md sm:mt-8 lg:mt-12">
                <div className="max-lg:w-1/2 lg:w-50">
                    <Label>Search</Label>
                    <Input
                        placeholder="Search by name"
                        value={filter.search}
                        className="w-full"
                        autoFocus
                        onChange={(e) => setFilter({ ...filter, search: e.target.value })}
                    />
                </div>
                <div className="max-lg:w-1/2 lg:w-50">
                    <Label>Category</Label>
                    <Select value={filter.category} onValueChange={(e) => setFilter({ ...filter, category: e })}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                {categories.map((item, index) => (
                                    <SelectItem value={item} key={index}>
                                        {item}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className="mt-4 lg:mt-6">
                <div className="flex items-center justify-between gap-2 max-sm:text-sm">
                    <span className="">Here’s What We Found...</span>
                    {visibleProductKeys[0] !== "all" && (
                        <button
                            className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-1.5"
                            onClick={() => setFilter({ search: "", category: "" })}>
                            <XCircleIcon className="size-3.5" />
                            <span>Clear filter</span>
                        </button>
                    )}
                </div>
                {visibleProductKeys[0] === "all" || visibleProductKeys.length > 0 ? (
                    <FlipReveal
                        className="mt-3 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5"
                        keys={visibleProductKeys}
                        showClass="flex"
                        hideClass="hidden">
                        {products.map((product) => (
                            <FlipRevealItem flipKey={product.sku} key={product.sku}>
                                <div className="group relative w-full cursor-pointer">
                                    <div className="bg-muted absolute -inset-2 scale-50 rounded-md opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"></div>

                                    <div className="relative">
                                        <div className="relative">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-32 w-full rounded-md object-cover sm:h-40 xl:h-50"
                                            />
                                            <div className="bg-background absolute end-1 bottom-1 z-1 flex items-center gap-0.5 rounded px-1 py-0.5 text-xs opacity-0 transition-all group-hover:opacity-100">
                                                <PlusIcon className="size-3" />
                                                Add Item
                                            </div>
                                        </div>
                                        <div className="mt-3 flex items-end justify-between gap-1">
                                            <div>
                                                <p className="text-muted-foreground font-mono text-[10px]/none tracking-wider uppercase">
                                                    {product.category}
                                                </p>
                                                <p className="mt-1 line-clamp-1 leading-none font-medium max-sm:text-sm">
                                                    {product.name}
                                                </p>
                                            </div>
                                            <p>
                                                <sup className="text-muted-foreground">$</sup>
                                                <span className="text-xl font-medium">{product.price}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FlipRevealItem>
                        ))}
                    </FlipReveal>
                ) : (
                    <div className="text-muted-foreground mt-12 text-center">No products found</div>
                )}
            </div>
        </div>
    );
};

export default ProductFilter1;
