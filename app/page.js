"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { Button } from "@/components/ui/button";


export default function Home() {

    const [input, setInput] = useState("");

    const [students, setStudent] = useState([]);

    const [age, setAge] = useState("");

    const [gender, setGender] = useState("");

    const [editAge, setEditAge] = useState("");

    const [editGender, setEditGender] = useState("");

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const [editName, setEditName] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    const [loading, setLoading] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");

    const [page, setPage] = useState(1);

    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function checkConnection() {
            const { data, error } = await supabase
                .from("students")
                .select("*");

            if (error) {
                console.log("❌ Not Connected");
                console.log(error);
            } else {
                console.log("✅ Connected to Supabase");
            }
        }

        checkConnection();
    }, []);

    // useEffect(() => {
    //     getStudents();
    // }, []);

    useEffect(() => {
        getStudents(page);
    }, [page]);

    async function getStudents(pageNumber = 1) {
        // const { data, error } = await supabase
        //     .from("students")
        //     .select("*")
        //     .order("id", { ascending: true });

        const res = await fetch(
            `/api/students?page=${pageNumber}`
        );

        const result = await res.json();

        setStudent(result.students);
        setTotalPages(result.totalPages);

        // console.log(data);
        // if (error) {
        //     console.log(error);
        // } else {
        //     setStudent(data);
        // }
    }



    //           const addStudent = () => {
    //              if (input.trim() === "") return;

    //             setStudent([...students, input]);
    //             setInput("");
    //   };

    //    const addStudent = () => {

    //       if (input.trim() === "") return;

    //       const updatedStudents = [...students, input];

    //        setStudent(updatedStudents);

    //        localStorage.setItem(
    //        "students",
    //        JSON.stringify(updatedStudents)
    //       );

    //         setInput("");
    //         };


    const addStudent1 = async () => {
        if (input.trim() === "") return;

        setLoading(true);

        const { data, error } = await supabase
            .from("students")
            .insert([
                {
                    name: input,
                    age: age === "" ? null : Number(age),
                    gender: gender === "" ? null : gender,
                },
            ])
            .select();

        setLoading(false);

        if (error) {
            console.log(error);
            return;
        }

        setStudent([...students, ...data]);

        setInput("");
        setAge("");
        setGender("");

        setSuccessMessage("Student Added Successfully ✅");

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };
    const openDrawer = (student) => {
        setSelectedStudent(student);

        setEditName(student.name);
        setEditAge(student.age);
        setEditGender(student.gender);


        setIsEditing(false);

        setIsDrawerOpen(true);
    };

    const saveChanges = async () => {
        setLoading(true);

        const { error } = await supabase
            .from("students")
            .update({
                name: editName,
                age: editAge,
                gender: editGender,
            })
            .eq("id", selectedStudent.id);

        if (error) {
            console.log(error);
            setLoading(false);
            return;
        }

        await getStudents();

        setLoading(false);

        setSuccessMessage("Student Updated Successfully ✏️");

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);

        setIsDrawerOpen(false);
        setSelectedStudent(null);
        setEditName("");
        setIsEditing(false);
    };


    const deleteStudent = async (id) => {

        setLoading(true);

        const { error } = await supabase
            .from("students")
            .delete()
            .eq("id", id);

        setLoading(false);

        if (error) {
            console.log(error);
            return;
        }

        await getStudents();

        setSuccessMessage("Student Deleted Successfully 🗑️");

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };


    return (


        <div>
            {/* <h1>Check Console (F12)</h1> */}
            
            <h1 className="text-2xl flex justify-center items-center p-4">Student Home page</h1>
            <br />
            <br />
            {/* <Link href="/students">

                <h2 className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600 p-4">
                    Students
                </h2>

            </Link>
            <Link href="/teachers">

                <h2 className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600 p-4">
                    Teachers
                </h2>

            </Link>
            <Link href="/schoolbuses">

                <h2 className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600 p-4">
                    School Buses
                </h2>

            </Link> */}
            <div>
                {/* <input className="h-12 px-3 border-1 mr-2 ml-2"
                    type="text"
                    placeholder="Enter the name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /> */}
                <input
                    className="h-12 px-3 border mr-2 ml-2"
                    type="text"
                    placeholder="Enter name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <input
                    className="h-12 px-3 border mr-2"
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <select
                    className="h-12 px-3 border mr-2"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                >
                    <option className="bg-black" value="">Gender</option>
                    <option className="bg-black" value="Male">Male</option>
                    <option className="bg-black" value="Female">Female</option>
                </select>
                <Button 
                onClick={addStudent1}
                className="bg-sky-400 text-black h-12 px-8"
                    >
                    Add
                </Button>
                {/* <ul>
           {students.map((student, index) => (
           <li className="ml-2 mt-2"  key={index}>
            {student}
            </li>
            ))}
           </ul> */}
                <br />
                <br />
                <Link href="/display" target="_blank" className="ml-3 ">
                    Display Students
                </Link>
                <br />
                <br />
                <div>
                    <h1 className="ml-5">Students List</h1>

                    <table className="border-collapse border border-white ml-5">
                        <thead>
                            <tr>
                                <th className="border border-white px-4 py-2">ID</th>
                                <th className="border border-white px-4 py-2">Name</th>
                                <th className="border border-white px-4 py-2">Age</th>
                                <th className="border border-white px-4 py-2">Gender</th>
                                <th className="border border-white px-4 py-2">Delete option</th>
                                {/* <th className="border border-white px-4 py-2">Edit option</th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {students.map((student) => (
                                <tr
                                    key={student.id}
                                    className="cursor-pointer hover:bg-gray-800"
                                    onClick={() => openDrawer(student)}
                                >
                                    <td className="border border-white px-4 py-2">
                                        {student.id}
                                    </td>
                                    <td className="border border-white px-4 py-2">
                                        {student.name}
                                    </td>
                                    <td className="border border-white px-4 py-2">{student.age}</td>
                                    <td className="border border-white px-4 py-2">{student.gender}</td>

                                    <td className="border border-white px-4 py-2">
                                        <div className="flex justify-center">
                                            <button
                                                className="bg-sky-400 text-black px-3 py-1"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteStudent(student.id);
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                    {/* <td className="border border-white px-4 py-2">
                                        <div className="flex justify-center">
                                            <button
                                                className="bg-yellow-400 text-black px-3 py-1"
                                                onClick={() => editStudent(student)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex gap-2 mt-4 ml-5">

                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="border px-3 py-1"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setPage(i + 1)}
                                className={`border px-3 py-1 ${page === i + 1 ? "bg-blue-500" : ""
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            className="border px-3 py-1"
                        >
                            Next
                        </button>

                    </div>



                </div>
                {isDrawerOpen && (
                    <div className="fixed top-0 right-0 h-screen w-96 bg-white text-black shadow-2xl p-6">

                        <h2 className="text-2xl font-bold mb-6">
                            Edit Student
                        </h2>

                        <label className="block mb-2">
                            Student ID
                        </label>

                        <input
                            value={selectedStudent?.id || ""}
                            disabled
                            className="border p-2 w-full mb-4"
                        />

                        <label className="block mb-2">
                            Name
                        </label>

                        <input
                            value={editName}
                            disabled={!isEditing}
                            onChange={(e) => setEditName(e.target.value)}
                            className="border p-2 w-full mb-6"
                        />

                        <label className="block mb-2">
                            Age
                        </label>

                        <input
                            value={editAge || ""}
                            disabled={!isEditing}
                            onChange={(e) => setEditAge(e.target.value)}
                            className="border p-2 w-full mb-4"
                        />

                        <label className="block mb-2">
                            Gender
                        </label>

                        <select
                            value={editGender || ""}
                            disabled={!isEditing}
                            onChange={(e) => setEditGender(e.target.value)}
                            className="border p-2 w-full mb-6"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                        <div className="flex gap-3">

                            {!isEditing ? (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-yellow-500 text-white px-4 py-2"
                                >
                                    Edit
                                </button>
                            ) : (
                                <button
                                    onClick={saveChanges}
                                    className="bg-green-500 text-white px-4 py-2"
                                >
                                    Save Changes
                                </button>
                            )}

                            <button
                                onClick={() => {
                                    setIsDrawerOpen(false);
                                    setIsEditing(false);
                                }}
                                className="bg-red-500 text-white px-4 py-2"
                            >
                                Close
                            </button>

                        </div>
                    </div>
                )}
                {loading && (
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-[9999]
               bg-black/50 flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 border-4 border-white border-t-blue-500 rounded-full animate-spin"></div>

                            <p className="text-white mt-4 text-lg">
                                Loading...
                            </p>
                        </div>
                    </div>
                )}
                {successMessage && (
                    <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
                        {successMessage}
                    </div>
                )}
                <div>
                    <footer className="mt-30">Footer</footer>
                </div>
            </div>



        </div>
    );
}
