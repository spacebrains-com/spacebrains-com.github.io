import { footerCopy } from "@/app/copy/footer";

export default function Footer(){
    return (
        <footer className="w-full float-left pb-20">
            <div className="container  lg:px-40 flex items-center flex-col justify-end h-full mx-auto text-center mt-0 px-4">
                <p className="text-lg font-medium  w-full lg:text-black text-white mb-40 md:mb-0"  dangerouslySetInnerHTML={{ __html: footerCopy.description }}></p>
                <h2 className="mt-32 font-bold lg:text-3xl text-2xl text-Helvetica-medium-extended uppercase  w-full text-black">
                </h2>

            </div>

        </footer>
    )
}