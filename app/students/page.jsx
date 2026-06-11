import Link from "next/link";
export default function Page() {
    return (
        // <div>
        // <h1 className="text-2xl flex justify-center items-center p-4">Students Information</h1>
        // <div className="flex justify-center items-center"> 

        // <table className="border-2 border-white-500">
        //     <thead>
        //         <tr>
        //             <th className="border-2 border-white p-2">ID</th>
        //             <th className="border-2 border-white p-2">Name</th>
        //             <th className="border-2 border-white p-2">Age</th>
        //             <th className="border-2 border-white p-2">Department</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         <tr>
        //             <td className="border-2 border-white p-2">1</td>
        //             <td className="border-2 border-white p-2">surya</td>
        //             <td className="border-2 border-white p-2">21</td>
        //             <td className="border-2 border-white p-2">cse</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">2</td>
        //             <td className="border-2 border-white p-2">ram</td>
        //             <td className="border-2 border-white p-2">34</td>
        //             <td className="border-2 border-white p-2">ece</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">4</td>
        //             <td className="border-2 border-white p-2">Siva</td>
        //             <td className="border-2 border-white p-2">27</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">5</td>
        //             <td className="border-2 border-white p-2">Elan</td>
        //             <td className="border-2 border-white p-2">19</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">6</td>
        //             <td className="border-2 border-white p-2">Akash</td>
        //             <td className="border-2 border-white p-2">45</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">7</td>
        //             <td className="border-2 border-white p-2">Rahul</td>
        //             <td className="border-2 border-white p-2">24</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">8</td>
        //             <td className="border-2 border-white p-2">Rijio</td>
        //             <td className="border-2 border-white p-2">23</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">9</td>
        //             <td className="border-2 border-white p-2">Tony</td>
        //             <td className="border-2 border-white p-2">22</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         <tr>
        //             <td className="border-2 border-white p-2">10</td>
        //             <td className="border-2 border-white p-2">Kishore</td>
        //             <td className="border-2 border-white p-2">21</td>
        //             <td className="border-2 border-white p-2">mech</td>
        //         </tr>
        //         </tbody>

        // </table>

        // </div>
        // <div className="">

        // <Link href="/">

        // <h2 className=" flex justify-center items-center mt-50 text-blue-500 text-2xl cursor-pointer">Return to home page</h2>

        // </Link>
        // </div>


        // </div>
        <div className="lg:flex">
            <div className="flex-1 p-4">


                <div className="
                           bg-red-500
                           sm:bg-blue-500
                           md:bg-green-500
                           lg:bg-yellow-500
                           xl:bg-purple-500
                           2xl:bg-pink-500
                           text-white
                           p-10
                           text-center
                           text-xl
                           
                           
            ">
                    Resize the screen
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-1 mt-4">


                    <div className="text-center
                            text-white
                            p-5
                            bg-blue-500
                            w-full
                            "
                    >
                        width
                    </div>
                    <div className="text-center
                            text-white
                            p-5
                            bg-blue-500
                            w-full
                            ">
                        width
                    </div>
                    <div className="text-center
                            text-white
                            p-5
                            bg-blue-500
                            w-full 
                            ">
                        width
                    </div>
                    <div className="text-center
                            text-white
                            p-5
                            bg-blue-500
                            
                             w-full
                            ">
                        width
                    </div>

                </div>
                <div className="grid 
                    grid-cols-8 mt-5 
                    sm:grid-cols-2 
                    md:grid-cols-4  
                    lg:grid-cols-8 
                    gap-1">
                    <div className="bg-red-500 text-center p-5 w-full">A</div>
                    <div className="bg-red-500 text-center p-5 w-full">B</div>
                    <div className="bg-red-500 text-center p-5 w-full">C</div>
                    <div className="bg-red-500 text-center p-5 w-full">D</div>
                    <div className="bg-red-500 text-center p-5 w-full">E</div>
                    <div className="bg-red-500 text-center p-5 w-full">F</div>
                    <div className="bg-red-500 text-center p-5 w-full">G</div>
                    <div className="bg-red-500 text-center p-5 w-full">H</div>
                </div>

                <div className="flex 
                                   justify-around 
                                   h-20 
                                   border-2
                                   sm:justify-center
                                   md:justify-evenly
                                   lg:justify-end
                                    
                                   mt-5
                                      ">
                    <div className="bg-red-500 p-5">A</div>
                    <div className="bg-red-500 p-5">B</div>
                    <div className="bg-red-500 p-5">C</div>
                    {/* <div className="bg-red-500 p-5">D</div>    */}

                </div>

                <div className="flex flex-wrap flex-row gap-2 mt-3">
                    <div className="w-32 bg-red-500 sm:bg-yellow-500 text-center p-5">A</div>
                    <div className="w-32 bg-red-500 md:bg-sky-500 text-center p-5">B</div>
                    <div className="w-32 bg-red-500 lg:bg-green-500 text-center p-5">C</div>
                    <div className="w-32 bg-red-500 sm:bg-yellow-500 text-center p-5">D</div>
                    <div className="w-32 bg-red-500 md:bg-sky-500 text-center p-5">E</div>
                    <div className="w-32 bg-red-500 lg:bg-green-500 text-center p-5">F</div>
                    <div className="w-32 bg-red-500 sm:bg-yellow-500 text-center p-5">G</div>
                    <div className="w-32 bg-red-500 md:bg-sky-500 text-center p-5">H</div>
                    <div className="w-32 bg-red-500 lg:bg-green-500 text-center p-5">i</div>


                </div>
                <div className="grid grid-cols-4 gap-2 mt-3">
                    <div className="bg-red-500 p-5 col-span-2">
                        A (2-cols)
                    </div>
                    <div className="bg-red-500 p-5">
                        B
                    </div>
                    <div className="bg-red-500 p-5">
                        C
                    </div>

                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                    <div className="bg-red-500 p-5 row-span-2 ">
                        A
                    </div>
                    <div className="bg-blue-500 p-5">
                        B
                    </div>
                    <div className="bg-green-500 p-5">
                        C
                    </div>
                    <div className="bg-yellow-500 p-5">
                        D
                    </div>

                </div>

                <div className=" flex mt-3 text-center gap-2">
                    <div className="  bg-red-500 p-5">A</div>
                    <div className=" bg-blue-500 p-5">B</div>
                    <div className=" bg-green-500 p-5">C</div>
                </div>

                <div className="flex flex-col gap-2 mt-3 items-start">
                    <div className="bg-red-500 p-5 ">A</div>
                    <div className="bg-blue-500 p-5">B</div>
                    <div className="bg-green-500 p-5">C</div>
                </div>

                <div className="flex justify-evenly items-center gap-2 h-40 border mt-3">
                    <div className="bg-red-500 p-5">A</div>
                    <div className="bg-blue-500 p-5">B</div>
                    <div className="bg-green-500 p-5">C</div>
                </div>
                <div className="flex justify-around items-center gap-2 h-40 border mt-3">
                    <div className="bg-red-500 p-5">A</div>
                    <div className="bg-blue-500 p-5">B</div>
                    <div className="bg-green-500 p-5">C</div>
                </div>


            </div>
            
            <div className="hidden lg:block w-64 bg-gray-800 text-white min-h-screen">
                Sidebar
            </div>


        </div>
    );
}