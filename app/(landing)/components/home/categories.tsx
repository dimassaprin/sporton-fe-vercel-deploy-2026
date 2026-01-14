import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

const categoryList = [
    {
        name: "Running",
        imgUrl: "category-running.png",
    },
]

type TCategoriesProps = {
    categories: Category[];
}

const CategoriesSection = ({categories}: TCategoriesProps) => {
    return ( 
        <section id="category-section" className="countainer mx-auto pb-20">
            <div className="container mx-auto">
                <div className="flex justify-between items-end mb-8">
                <h2 className="text-[24px] font-bold text-black leading-none">
                Browse By Categories
                </h2>
                <Link href="#" className="flex gap-2 text-primary font-medium">
                    <span className="self-center">See All Categories</span>
                    <FiArrowRight className="self-center" size={18}/>
                </Link>
                </div>
            </div>
        <div className="grid grid-cols-6 gap-12 mt-8 container mx-auto">
         {categories.map((category) => (
            <div className="rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center" key={category._id}>
                <div className="self-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={86}
                height="86"
                alt={category.name}
                className="mb-[10px]"
              />
                <div className="text-primary font-medium text-xl text-center">{category.name}</div>
                </div>
            </div>
         ))} 
        
        </div>
        </section>
    );
};
export default CategoriesSection;