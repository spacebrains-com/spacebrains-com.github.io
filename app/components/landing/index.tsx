import Image from "next/image";
import { landingCopy } from "@/app/copy/landing";

export default function Sections() {
    return (
        <>
            <div className="w-full float-left lg:h-[100vh]" id="main-header">
                <div className="container mx-auto lg:px-40 px-4">
                    <div className="w-full float-left mt-56 lg:h-[40vh]  flex justify-end items-center flex-col text-white">
                        <h1 className="lg:text-7xl text-2xl text-Helvetica-medium-extended"> {landingCopy.heroSection.title} </h1>
                        <h1 className="xl:text-[10rem] text-4xl lg:pt-20 pt-10 text-Helvetica-medium-extended "> {landingCopy.heroSection.title1} </h1>

                    </div>
                    <div className="flex w-full justify-between h-[300px] flex-wrap mt-60 float-right text-sm">
                        <p className="lg:w-[30%] w-full lg:mt-60 text-Helvetica-medium-extended uppercase">
                            {landingCopy.heroSection.description1}
                        </p>
                        <p className="lg:w-[40%] w-full mt-0 text-Helvetica-medium-extended uppercase">
                            {landingCopy.heroSection.description}
                        </p>

                    </div>

                </div>

            </div>
            <div className="w-full float-left lg:mt-40 pt-10" id="Introduction">
                <div className="container mx-auto lg:px-40 px-4">
                    <div className="w-full flex h-[70vh] justify-between items-left float-left flex-wrap">
                        <div className="lg:w-[40%] w-full text-3xl flex flex-col justify-left text-Helvetica-medium-extended uppercase">
                            <p dangerouslySetInnerHTML={{ __html: landingCopy.section1.title }}></p>
                        </div>
                        <div className="lg:w-[50%] w-full text-2xl leading-10 font-light pink-text font-helveticaneuelight"
                            dangerouslySetInnerHTML={{ __html: landingCopy.section1.description }}>
                        </div>
                    </div>
                    <div className="w-full text-center flex justify-center">
                        <Image src="/img/star-down.png" height={340} width={40} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full float-left lg:mt-40" id="bg-circle">
                <div className="container mx-auto lg:px-40 px-4">
                    <div className="lg:w-[40%] w-full float-left">
                        <h2 className="text-Helvetica-medium-extended uppercase text-3xl" dangerouslySetInnerHTML={{ __html: landingCopy.section2.title }}></h2>
                        <p className="mt-10 text-base font-medium text-Helvetica ">{landingCopy.section2.description}</p>
                    </div>

                    <div className="lg:w-[50%] w-full float-right">
                        <div className="w-full flex justify-center items-left mt-60">
                            <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                            <div className="w-full mt-2">
                                <h2 className="text-xl font-medium text-Helvetica ">[ {landingCopy.section2.items_R[0].title} ]</h2>
                                <p className="mt-5 font-light font-helveticaneuelight text-base lg:w-[70%] w-full">
                                    {landingCopy.section2.items_R[0].description}
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-left mt-20">
                            <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                            <div className="w-full mt-2">
                                <h2 className="text-xl font-medium text-Helvetica">[ {landingCopy.section2.items_R[1].title} ]</h2>
                                <p className="mt-5 font-light font-helveticaneuelight text-base lg:w-[70%] w-full">
                                    {landingCopy.section2.items_R[1].description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-left lg:mt-[32rem] mt-40 float-left">
                        <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                        <div className="w-full mt-2">
                            <h2 className="text-xl font-medium text-Helvetica">[ {landingCopy.section2.items_L[0].title} ]</h2>
                            <p className="mt-5 font-helveticaneuelight text-base lg:lg:w-[30%] w-full w-full">
                                {landingCopy.section2.items_R[0].description}
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-left mt-20 float-left">
                        <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                        <div className="w-full mt-2">
                            <h2 className="text-xl font-medium text-Helvetica">[ {landingCopy.section2.items_L[1].title} ]</h2>
                            <p className="mt-5 font-helveticaneuelight text-base lg:lg:w-[30%] w-full w-full">
                                {landingCopy.section2.items_R[1].description}
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full float-left mt-40 px-4 relative" id="bg-tunnel">
                <div className="lg:w-[50%] w-full float-right" id="human-potential">
                    <h2 className="text-Helvetica-medium-extended uppercase font-light text-4xl"
                        dangerouslySetInnerHTML={{ __html: landingCopy.section3.title }}>
                    </h2>
                    <p className="mt-10 text-base text-Helvetica font-normal lg:w-[50%] w-full" dangerouslySetInnerHTML={{ __html: landingCopy.section3.description }}></p>
                </div>
                <div className="w-full float-left mt-20">
                    <div className="container mx-auto lg:px-40 px-4">
                        <div className="card lg:w-[360px] h-[360px] bg-black border-2 relative border-white rounded-2xl p-5 bg-gradient-green overflow-hidden">
                            <img src="/img/Cognitive-Liberation.png" className="mt-5" width={70} height={70} />
                            <h2 className="text-3xl  mt-5  font-medium text-Helvetica uppercase" dangerouslySetInnerHTML={{ __html: landingCopy.section4.boxs1.title }}></h2>
                            <p className="text-Helvetica font-medium text-base w-full mt-5 gray-text ">
                                {landingCopy.section4.boxs1.description}
                            </p>
                        </div>
                        <div className="card lg:w-[360px] my-10 h-[360px] bg-black border-2 float-right relative border-white rounded-2xl  p-5 bg-gradient-green overflow-hidden">
                            <img src="/img/Paradigm-Shift-in-Existence.png" className="mt-5" width={70} height={70} />
                            <h2 className="text-3xl font-medium text-Helvetica mt-5 uppercase" dangerouslySetInnerHTML={{ __html: landingCopy.section4.boxs2.title }}></h2>
                            <p className="font-medium text-Helvetica text-base w-full mt-5 gray-text ">
                                {landingCopy.section4.boxs2.description}
                            </p>
                        </div>
                        <div className="card lg:w-[360px] h-[360px] mt-60 bg-black border-2 relative border-white rounded-2xl p-5 bg-gradient-green overflow-hidden">
                            <img src="/img/Unbounded-Potential.png" className="mt-5" width={70} height={70} />
                            <h2 className="text-3xl font-medium text-Helvetica mt-5 uppercase" dangerouslySetInnerHTML={{ __html: landingCopy.section4.boxs3.title }}></h2>
                            <p className="font-medium text-Helvetica text-base w-full mt-5 gray-text ">
                                {landingCopy.section4.boxs3.description}
                            </p>
                        </div>
                    </div>

                </div>
                <div className="xl:w-[70%] w-full xl:left-40 float-left  px-4 xl:absolute relative xl:bottom-20 mt-40">
                    <div className="container mx-auto lg:px-40 px-0">
                        <div className=" w-full float-left">
                            <h2 className="text-Helvetica-medium-extended text-4xl uppercase" dangerouslySetInnerHTML={{ __html: landingCopy.section4.description }}></h2>
                            <p className="mt-10 text-base font-medium text-Helvetica lg:w-[50%] w-full" dangerouslySetInnerHTML={{ __html: landingCopy.section4.subDecription }}></p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full float-left lg:mt-40 mt-10 px-4" id="environmental-impact">
                <div className="container mx-auto lg:px-40 px-0">
                    <div className="w-full grid  lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1">

                        {landingCopy.section5.map((items, index) => (

                            <div>
                                <h2 className="lg:text-4xl text-2xl uppercase font-light text-Helvetica-medium-extended">
                                    {items.numberTitle} <br />
                                    <span className="green-text" dangerouslySetInnerHTML={{ __html: items.title }}></span>
                                </h2>
                                <p className="mt-5 text-base font-medium text-Helvetica lg:w-[50%] w-full gray-text ">
                                    {items.descriptoin}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="w-full float-left mt-60" id="advanced-healthcare">
                <div className="container mx-auto text-center">
                    <h2 className="uppercase text-Helvetica-medium-extended text-4xl" dangerouslySetInnerHTML={{ __html: landingCopy.section6.title }}></h2>
                    <p className="mt-10 text-base text-Helvetica font-medium w-full p-5" dangerouslySetInnerHTML={{ __html: landingCopy.section6.description }}>
                    </p>
                </div>
            </div>


        </>
    )
}