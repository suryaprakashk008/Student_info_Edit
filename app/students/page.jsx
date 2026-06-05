import Link from "next/link";
export default function Page(){
    return(
        <div>
        <h1 className="text-2xl flex justify-center items-center p-4">Students Information</h1>
        <div className="flex justify-center items-center"> 
        
        <table className="border-2 border-white-500">
            <thead>
                <tr>
                    <th className="border-2 border-white p-2">ID</th>
                    <th className="border-2 border-white p-2">Name</th>
                    <th className="border-2 border-white p-2">Age</th>
                    <th className="border-2 border-white p-2">Department</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border-2 border-white p-2">1</td>
                    <td className="border-2 border-white p-2">surya</td>
                    <td className="border-2 border-white p-2">21</td>
                    <td className="border-2 border-white p-2">cse</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">2</td>
                    <td className="border-2 border-white p-2">ram</td>
                    <td className="border-2 border-white p-2">34</td>
                    <td className="border-2 border-white p-2">ece</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">4</td>
                    <td className="border-2 border-white p-2">Siva</td>
                    <td className="border-2 border-white p-2">27</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">5</td>
                    <td className="border-2 border-white p-2">Elan</td>
                    <td className="border-2 border-white p-2">19</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">6</td>
                    <td className="border-2 border-white p-2">Akash</td>
                    <td className="border-2 border-white p-2">45</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">7</td>
                    <td className="border-2 border-white p-2">Rahul</td>
                    <td className="border-2 border-white p-2">24</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">8</td>
                    <td className="border-2 border-white p-2">Rijio</td>
                    <td className="border-2 border-white p-2">23</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">9</td>
                    <td className="border-2 border-white p-2">Tony</td>
                    <td className="border-2 border-white p-2">22</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                <tr>
                    <td className="border-2 border-white p-2">10</td>
                    <td className="border-2 border-white p-2">Kishore</td>
                    <td className="border-2 border-white p-2">21</td>
                    <td className="border-2 border-white p-2">mech</td>
                </tr>
                </tbody>
            
        </table>
        
        </div>
        <div className="">
           
        <Link href="/">

        <h2 className=" flex justify-center items-center mt-50 text-blue-500 text-2xl cursor-pointer">Return to home page</h2>

        </Link>
        </div>

        
        </div>
        
    );
}