import Link from "next/link";

export default function Page(){

    return(
         <div>
            <h1 className="text-2xl flex justify-center items-center p-4">School Buses Information</h1>

             <div className="flex justify-center">
            <table className="border-2 border-white-500">
            <thead>
                <tr>
                    <th className="text-center border-2 border-white p-2">School-buses-ID</th>
                    <th className="text-center border-2 border-white p-2">Source</th>
                    <th className="text-center border-2 border-white p-2">Destination</th>
                    <th className="text-center border-2 border-white p-2">Bus-No</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center border-2 border-white p-2">1</td>
                    <td className="text-center border-2 border-white p-2">Kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-1</td>
                    <td className="text-center border-2 border-white p-2">10</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">2</td>
                    <td className="text-center border-2 border-white p-2">kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-1</td>
                    <td className="text-center border-2 border-white p-2">20</td>
                </tr>
                 <tr>
                    <td className="text-center border-2 border-white p-2">3</td>
                    <td className="text-center border-2 border-white p-2">kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-3</td>
                    <td className="text-center border-2 border-white p-2">30</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">4</td>
                    <td className="text-center border-2 border-white p-2">Kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-4</td>
                    <td className="text-center border-2 border-white p-2">40</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">5</td>
                    <td className="text-center border-2 border-white p-2">Kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-5</td>
                    <td className="text-center border-2 border-white p-2">50</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">6</td>
                    <td className="text-center border-2 border-white p-2">Kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-6</td>
                    <td className="text-center border-2 border-white p-2">60</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">7</td>
                    <td className="text-center border-2 border-white p-2">Kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-7</td>
                    <td className="text-center border-2 border-white p-2">70</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">8</td>
                    <td className="text-center border-2 border-white p-2">Rijio</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-8</td>
                    <td className="text-center border-2 border-white p-2">80</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">9</td>
                    <td className="text-center border-2 border-white p-2">Tony</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-9</td>
                    <td className="text-center border-2 border-white p-2">90</td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-white p-2">10</td>
                    <td className="text-center border-2 border-white p-2">kumbakonam</td>
                    <td className="text-center border-2 border-white p-2">cholaburam-10</td>
                    <td className="text-center border-2 border-white p-2">100</td>
                </tr>
                </tbody>
            
        </table>
        </div>
        <div>
        <Link href="/">
        <h2 className=" absolute bottom-0 text-blue-500 text-2xl cursor-pointer">Return to home page</h2>
        </Link>
       </div>
         </div>

    );
}