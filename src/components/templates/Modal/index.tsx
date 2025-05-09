import {X} from "lucide-react";
import Link from "next/link";

interface ImageModalProps {
    imageSrc: string;
    altText?: string;
    isOpen: boolean;
    onClose: () => void;
}

export function ImageModal({imageSrc, altText = "", isOpen, onClose}: ImageModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <button
                className="absolute top-12 right-10 text-black hover:text-red-600"
                onClick={onClose}
            >
                <X size={34} className='text-white'/>
            </button>
            <div className='bg-white w-[900px] h-[500px] rounded-2xl'>
                <div className='flex justify-between p-5 gap-x-16'>
                    <img
                        src={imageSrc}
                        alt={altText}
                        className="w-[400px] h-[400px] object-contain rounded"
                    />

                    <div className='h-full flex flex-col justify-center gap-y-5 px-4'>
                        <h1 className='font-semibold text-2xl'>Ibuprofen 400mg</h1>
                        <p className='flex gap-2'>
                            15.00$00
                            <span className="text-red-600 text-sm line-through">
                            10.00$00
                        </span>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus
                            repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.
                        </p>
                    </div>
                </div>

                <Link href={'#'} className='flex justify-end p-6 underline cursor-pointer'>Ver Detalhes</Link>
            </div>
        </div>
    );
}
