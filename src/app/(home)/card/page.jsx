"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const CardPage = () => {
    return (
        <div className='my-10'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="">
                        <Button variant="default" size="default">Click Me</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;