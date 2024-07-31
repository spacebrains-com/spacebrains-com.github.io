import Image from "next/image";

export default function Sections() {
    return (
        <>
            <div className="w-full float-left lg:h-[100vh]" id="main-header">
                <div className="container mx-auto lg:px-40 px-4">
                    <div className="w-full float-left mt-56 lg:h-[40vh]  flex justify-end items-center flex-col text-white">
                        <h1 className="lg:text-7xl text-2xl text-Helvetica-medium-extended"> THE DAWN OF </h1>
                        <h1 className="xl:text-[10rem] text-4xl lg:pt-20 pt-10 text-Helvetica-medium-extended "> SPACEBRAINS</h1>

                    </div>
                    <div className="flex w-full justify-between h-[300px] flex-wrap mt-60 float-right text-sm">
                        <p className="lg:w-[30%] w-full lg:mt-60 text-Helvetica-medium-extended uppercase">
                            What may have long been relegated to the realm of science fiction fantasy is now being put forward as a necessity to major life extension
                        </p>
                        <p className="lg:w-[40%] w-full mt-0 text-Helvetica-medium-extended uppercase">
                            SpaceBrains heralds a new epoch in human ingenuity and technological symbiosis, offering an immersive exploration into what it means to think and perceive beyond human constraints.
                        </p>

                    </div>

                </div>

            </div>
            <div className="w-full float-left lg:mt-40 pt-10" id="Introduction">
                <div className="container mx-auto lg:px-40 px-4"> 
                    <div className="w-full flex h-[70vh] justify-between items-left float-left flex-wrap">
                        <div className="lg:w-[30%] w-full text-3xl flex flex-col justify-left text-Helvetica-medium-extended uppercase">
                            <p>
                                Elevating Mind
                            </p>
                            <p>Beyond Matter</p>
                        </div>
                        <div className="lg:w-[50%] w-full text-2xl leading-10 font-light pink-text font-helveticaneuelight">
                            The human body will always be a potential victim of <b className="green-text">disease</b>, <b className="green-text">physical injuries</b>, and the natural process of <b className="green-text">ageing</b>. However, assuming an optimal and <b className="text-green">stable environment</b>, the human brain might be able to function through extended time frames. This idea appears to be a precondition if future options regarding <b className="green-text">human longevity</b> are considered at all.
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
                        <h2 className="text-Helvetica-medium-extended uppercase text-3xl">Enabling the <br /> SpaceBrains Vision</h2>
                        <p className="mt-10 text-base font-medium text-Helvetica ">The realization of SpaceBrains hinges on groundbreaking medical advancements. These innovations not only challenge our current understanding but also pave the way for a future where human brains can function independently of their biological encasements.</p>
                    </div>
                    <div className="lg:w-[50%] w-full float-right">
                        <div className="w-full flex justify-center items-left mt-60">
                            <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                            <div className="w-full mt-2">
                                <h2 className="text-xl font-medium text-Helvetica ">[ Biocompatible Support Systems ]</h2>
                                <p className="mt-5 font-light font-helveticaneuelight text-base lg:w-[70%] w-full">
                                    Development of materials and methods that integrate seamlessly with human tissue, ensuring that brains can safely transition from biological to synthetic support.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex justify-center items-left mt-20">
                            <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                            <div className="w-full mt-2">
                                <h2 className="text-xl font-medium text-Helvetica">[ Advanced Surgical Techniques ]</h2>
                                <p className="mt-5 font-light font-helveticaneuelight text-base lg:w-[70%] w-full">
                                    Crafting precise surgical procedures for safely encapsulating the brain within a life-sustaining silicon pod, a crucial step towards bodily transcendence.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center items-left lg:mt-[32rem] mt-40 float-left">
                        <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                        <div className="w-full mt-2">
                            <h2 className="text-xl font-medium text-Helvetica">[ Nutritional and Environmental Control ]</h2>
                            <p className="mt-5 font-helveticaneuelight text-base lg:lg:w-[30%] w-full w-full">
                                The pod will meticulously regulate synthesized nutrients and oxygen levels, tailored to mimic the natural conditions of the body, ensuring the brain's functionality and longevity.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-left mt-20 float-left">
                        <div className="!w-[45px] !h-[42px] border-2 border-white mr-3 rounded-full float-left"></div>
                        <div className="w-full mt-2">
                            <h2 className="text-xl font-medium text-Helvetica">[ Sustainable Energy Solutions ]</h2>
                            <p className="mt-5 font-helveticaneuelight text-base lg:lg:w-[30%] w-full w-full">
                                Powering these life-support pods with reliable and eco-friendly energy sources like solar panels to meet their operational demands continuously.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full float-left mt-40 px-4 relative" id="bg-tunnel">
                <div className="lg:w-[50%] w-full float-right" id="human-potential">
                    <h2 className="text-Helvetica-medium-extended uppercase font-light text-4xl">Expanding <b className="green-text">Human</b><br /> <b className="green-text">Potential</b></h2>
                    <p className="mt-10 text-base text-Helvetica font-normal lg:w-[50%] w-full">
                        The SpaceBrains initiative is more than an endeavor to extend life; it's a transformative vision that redefines the very essence of human capability and consciousness.
                    </p>
                    <p className="mt-10 text-base text-Helvetica font-normal lg:w-[50%] w-full">
                        By liberating the brain from the physiological duties of an ageing body, we unlock a treasure trove of cognitive resources previously dedicated to maintenance and survival.
                    </p>
                </div>
                <div className="w-full float-left mt-20">
                    <div className="container mx-auto lg:px-40 px-4">
                        <div className="card lg:w-[360px] h-[360px] bg-black border-2 relative border-white rounded-2xl p-5 bg-gradient-green overflow-hidden">
                            <img src="/img/Cognitive-Liberation.png" className="mt-5" width={70} height={70} />
                            <h2 className="text-3xl  mt-5  font-medium text-Helvetica uppercase">Cognitive <br /> Liberation</h2>
                            <p className="text-Helvetica font-medium text-base w-full mt-5 gray-text ">
                                Powering these life-support pods with reliable and eco-friendly energy sources like solar panels to meet their operational demands continuously.
                            </p>
                        </div>
                        <div className="card lg:w-[360px] my-10 h-[360px] bg-black border-2 float-right relative border-white rounded-2xl  p-5 bg-gradient-green overflow-hidden">
                            <img src="/img/Paradigm-Shift-in-Existence.png" className="mt-5" width={70} height={70} />
                            <h2 className="text-3xl font-medium text-Helvetica mt-5 uppercase">Paradigm Shift <br />
                                in Existence</h2>
                            <p className="font-medium text-Helvetica text-base w-full mt-5 gray-text ">
                                This project proposes a radical change in understanding human life, suggesting a future where consciousness could continue indefinitely within a controlled, stable environment.
                            </p>
                        </div>
                        <div className="card lg:w-[360px] h-[360px] mt-60 bg-black border-2 relative border-white rounded-2xl p-5 bg-gradient-green overflow-hidden">
                            <img src="/img/Unbounded-Potential.png" className="mt-5" width={70} height={70} />
                            <h2 className="text-3xl font-medium text-Helvetica mt-5 uppercase">Unbounded <br /> Potential</h2>
                            <p className="font-medium text-Helvetica text-base w-full mt-5 gray-text ">
                                By overcoming earthly biological constraints, human potential is set to soar, opening up unprecedented possibilities for growth and achievement in all areas of life.
                            </p>
                        </div>
                    </div>

                </div>
                <div className="xl:w-[70%] w-full xl:left-40 float-left  px-4 xl:absolute relative xl:bottom-20 mt-40">
                    <div className="container mx-auto lg:px-40 px-0">
                        <div className=" w-full float-left">
                            <h2 className="text-Helvetica-medium-extended text-4xl uppercase">
                                Quantifying Enhanced Sensory <br /> and Motor Functions
                            </h2>
                            <p className="mt-10 text-base font-medium text-Helvetica lg:w-[50%] w-full">
                                SpaceBrain technology redefines neural functionality by quantitatively <br /> enhancing the brain's ability to perceive and interact with its environment.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="w-full float-left lg:mt-40 mt-10 px-4" id="environmental-impact">
                <div className="container mx-auto lg:px-40 px-0">
                    <div className="w-full grid  lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1">
                        <div>
                            <h2 className="lg:text-4xl text-2xl uppercase font-light text-Helvetica-medium-extended">
                                69 <br />
                                <span className="green-text">   Million<br /> Neurons </span>
                            </h2>
                            <p className="mt-5 text-base font-medium text-Helvetica lg:w-[50%] w-full gray-text ">
                                Utilizes pathways traditionally involving this number of neurons, now redirected for broader connectivity and function.
                            </p>
                        </div>
                        <div >
                            <h2 className="font-light lg:text-4xl text-2xl text-Helvetica-medium-extended uppercase">
                                400 – 700+ <br />
                                <span className="green-text">   Nanometer </span><br />
                                <span className="green-text">     Range </span>
                            </h2>
                            <p className="mt-5 text-base font-medium text-Helvetica lg:w-[50%] w-full gray-text ">
                                Expands the visible spectrum to include ultraviolet and infrared light, surpassing the standard human visual range.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-light lg:text-4xl text-2xl mt-10 text-Helvetica-medium-extended uppercase">
                                100+ <br />
                                <span className="green-text">   External <br /> Sensors </span>
                            </h2>
                            <p className="mt-5 text-base font-medium text-Helvetica lg:w-[50%] w-full gray-text ">
                                Interfaces with a diverse array of sensors, significantly enhancing the brain's ability to communicate and interpret environmental data.
                            </p>
                        </div>
                        <div>
                            <h2 className="font-light lg:text-4xl text-2xl mt-10 text-Helvetica-medium-extended uppercase">
                                50% <br />
                                <span className="green-text w-max block">  Increase in <br /> Perceptual Detail </span>
                            </h2>
                            <p className="mt-5 text-base font-medium text-Helvetica lg:w-[50%] w-full gray-text ">
                                Enhances the resolution and accuracy of sensory information, offering a richer and more detailed understanding of the environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full float-left mt-60" id="advanced-healthcare">
                <div className="container mx-auto text-center">
                    <h2 className="uppercase text-Helvetica-medium-extended text-4xl">
                        <b className="green-text font-normal">  Expanding </b>  the Bounds <br /> of Interaction
                    </h2>
                    <p className="mt-10 text-base text-Helvetica font-medium w-full">
                        SpaceBrains can project their presence over large distances, extending their <br />
                        influence up to the limits of a speed-of-light bubble—the farthest distance <br />
                        achievable within a latency threshold suitable for human cognition.
                    </p>
                </div>
            </div>


        </>
    )
}