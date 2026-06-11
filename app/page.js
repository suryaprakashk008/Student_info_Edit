"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

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

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

    const [addDialogOpen, setAddDialogOpen] = useState(false);

    const [saveChangesDialogOpen, setsaveChangesDialogOpen] = useState(false);

    const [nameError, setNameError] = useState("");

    const [ageError, setAgeError] = useState("");

    const [genderError, setGenderError] = useState("");

    const [EditNameError, setEditNameError] = useState("");

    const [EditAgeError, setEditAgeError] = useState("");

    const [EditGenderError, setEditGenderError] = useState("");

    const [isMobile, setIsMobile] = useState(false);

    const [pageInput, setPageInput] = useState("1");

    const [isResizing, setIsResizing] = useState(false);


    useEffect(() => {
        let timeout;

        const checkScreen = () => {
            setIsResizing(true);

            setIsMobile(window.innerWidth < 640);

            clearTimeout(timeout);

            timeout = setTimeout(() => {
                setIsResizing(false);
            }, 300);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
            clearTimeout(timeout);
        };
    }, []);

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
        //  console.log(document.documentElement.scrollWidth===window.innerWidth);

        getStudents(page);
    }, [page, isMobile]);

    useEffect(() => {

        setStudent([]);
        setTotalPages(1);
        setPage(1);

    }, [isMobile]);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () =>
            window.removeEventListener("resize", checkScreen);
    }, []);

    useEffect(() => {
        setPageInput(page.toString());
    }, [page]);



    async function getStudents(pageNumber = 1) {
        // const { data, error } = await supabase
        //     .from("students")
        //     .select("*")
        //     .order("id", { ascending: true });


        const limit = isMobile ? 4 : 10;

        const res = await fetch(
            `/api/students?page=${pageNumber}&limit=${limit}`
        );

        const result = await res.json();
        if (!result.students) return;
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

        if (
            input.trim() === "" ||
            age === "" ||
            Number(age) < 15 ||
            !gender
        ) {
            return;
        }

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

    const validateAddStudent = () => {
        let isValid = true;

        setNameError("");
        setAgeError("");
        setGenderError("");

        if (input.trim() === "") {
            setNameError("Name is required");
            isValid = false;
        }

        if (age === "") {
            setAgeError("Age is required");
            isValid = false;
        }
        else if (Number(age) < 15) {
            setAgeError("Age must be greater than 15");
            isValid = false;
        }

        if (!gender) {
            setGenderError("Please select gender");
            isValid = false
        }
        if (isValid) {
            setAddDialogOpen(true);
        }
    };


    const openDrawer = (student) => {
        setSelectedStudent(student);

        setEditName(student.name);
        setEditAge(student.age);
        setEditGender(student.gender);


        setIsEditing(false);

        setIsDrawerOpen(true);
    };

    const validateSaveChanges = () => {
        let savechange = true;

        setEditNameError("");
        setEditAgeError("");
        setEditGenderError("");

        if (editName.trim() === "") {
            setEditNameError("Name is required");
            savechange = false;
        }

        if (editAge === "") {
            setEditAgeError("Age is required");
            savechange = false;
        }

        if (Number(editAge) < 15) {
            setEditAgeError("Age must be greater than or equal to 15");
            savechange = false;
        }

        if (!editGender) {
            setEditGenderError("Please select gender");
            savechange = false;
        }

        if (savechange) {
            setsaveChangesDialogOpen(true);
        }
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

        await getStudents(page);

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

        await getStudents(page);

        setSuccessMessage("Student Deleted Successfully 🗑️");

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
        setIsDrawerOpen(false);
        setSelectedStudent(null);
        setEditName("");
        setEditAge("");
        setEditGender("");
        setIsEditing(false);
    };

    if (isResizing) {
        return (
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

        );
    }


    return (


        <div className="overflow-x-hidden overscroll-x-none ">

            {/* <h1>Check Console (F12)</h1> */}

            <h1 className="text-2xl flex justify-center items-center p-4">Student Home page</h1>
            <br />
            <br />
            {/* 
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
                <div className="px-4 flex justify-end">
                    {/* <input className="h-12 px-3 border-1 mr-2 ml-2"
                    type="text"
                    placeholder="Enter the name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /> */}
                    {/* <Input
                        className="w-74 mr-2 ml-2 p-5"
                        type="text"
                        placeholder="Enter name"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <Input
                        className="w-74 mr-3 p-5"
                        type="number"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="mt-1 mr-2" variant="outline">
                                {gender || "Gender"}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem
                            onClick={()=>setGender("Male")}
                            >
                             Male
                            </DropdownMenuItem>
                            <DropdownMenuItem
                            onClick={()=>setGender("Female")}
                            >
                             Female
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu> */}

                    <Button
                        onClick={() => setIsAddDrawerOpen(true)}
                        className=" mt-1 py-4 px-8"
                    >
                        Add
                    </Button>
                </div>
                {/* <ul>
           {students.map((student, index) => (
           <li className="ml-2 mt-2"  key={index}>
            {student}
            </li>
            ))}
           </ul> */}
                <br />
                <br />
                {/* <Link href="/display" target="_blank" className="ml-3 ">
                    Display Students
                </Link> */}
                <br />
                <br />
                <h1 className="ml-5 sm:ml-0">Students List</h1>


                <div className="block sm:hidden">
                    <div className="grid grid-cols-1 gap-4">

                        {students.map((student) => (
                            <div
                                key={student.id}
                                onClick={() => openDrawer(student)}
                                className="
                                             border
                                             rounded-lg
                                             p-4
                                             shadow-md
                                             cursor-pointer
                                             hover:bg-gray-100
                                             ml-5
                                             mr-5
                                            "
                            >
                                <p>
                                    <strong>Name:</strong> {student.name}
                                </p>

                                <p>
                                    <strong>Age:</strong> {student.age}
                                </p>

                                <p>
                                    <strong>Gender:</strong> {student.gender}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>


                <div className="hidden sm:block overflow-x-hidden">



                    <Table className=" w-full lg:table-fixed sm:table-fixed">
                        <TableHeader>
                            <TableRow>
                                <TableHead className=" ">ID</TableHead>
                                <TableHead className=" ">Name</TableHead>
                                <TableHead className=" ">Age</TableHead>
                                <TableHead className=" ">Gender</TableHead>

                                {/* <th className="border border-white ">Edit option</th> */}
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {students.map((student) => (
                                <TableRow
                                    key={student.id}
                                    className="cursor-pointer hover:bg-gray-200"
                                    onClick={() => openDrawer(student)}
                                >
                                    <TableCell className="">
                                        {student.id}
                                    </TableCell>
                                    <TableCell className="">
                                        {student.name}
                                    </TableCell>
                                    <TableCell className="">{student.age}</TableCell>
                                    <TableCell className="">{student.gender}</TableCell>

                                    {/* <TableCell className="">
                                        <div className="">
                                            <Button
                                                className="px-3 py-1"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    deleteStudent(student.id);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell> */}
                                    {/* <TableCell className="border border-white px-4 py-2">
                                        <div className="flex justify-center">
                                            <button
                                                className="bg-yellow-400 text-black px-3 py-1"
                                                onClick={() => editStudent(student)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </td> */}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex sm:hidden justify-center items-center gap-2 mt-4">

                    <Button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        Prev
                    </Button>

                    <Input
                        value={pageInput}
                        onChange={(e) => setPageInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                const pageNumber = Number(pageInput);

                                if (
                                    pageNumber >= 1 &&
                                    pageNumber <= totalPages
                                ) {
                                    setPage(pageNumber);
                                }
                            }
                        }}
                        className="w-16 text-center"
                    />

                    <span>/ {totalPages}</span>

                    <Button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                    >
                        Next
                    </Button>

                </div>

                <div className="hidden sm:flex flex-wrap justify-center gap-2 mt-4">

                    <Button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className="border px-3 py-1"
                    >
                        Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            className={`border px-3 py-1 ${page === i + 1 ? "bg-gray-500" : ""
                                }`}
                        >
                            {i + 1}
                        </Button>
                    ))}

                    <Button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className="border px-3 py-1"
                    >
                        Next
                    </Button>

                </div>

                {isAddDrawerOpen && (
                    <div className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-white p-6  overflow-y-auto">

                        <h2 className="text-2xl font-bold mb-6">
                            Add Student
                        </h2>

                        <Input
                            placeholder="Enter Name"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setNameError("");
                            }}
                        />
                        {nameError && (
                            <p className="text-red-500 text-sm mt-1">
                                {nameError}
                            </p>

                        )}
                        <Input
                            className="mt-4"
                            placeholder="Enter Age"
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                                setAgeError("");
                            }}
                        />
                        {ageError && (
                            <p className="text-red-500 text-sm mt-1">
                                {ageError}
                            </p>
                        )}

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full mt-4 justify-start"
                                >
                                    {gender || "Select Gender"}
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                                <DropdownMenuItem
                                    onClick={() => {
                                        setGender("Male");
                                        setGenderError("");
                                    }}
                                >
                                    Male
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    onClick={() => {
                                        setGender("Female");
                                        setGenderError("");
                                    }}
                                >
                                    Female
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {genderError && (
                            <p className="text-red-500 text-sm mt-1">
                                {genderError}
                            </p>
                        )}

                        <div className="flex gap-2 mt-6">
                            <Button
                                onClick={validateAddStudent}
                            >
                                Add Student
                            </Button>

                            <Button
                                variant="destructive"
                                onClick={() => setIsAddDrawerOpen(false)}
                            >
                                Close
                            </Button>
                        </div>

                    </div>
                )}



                {isDrawerOpen && (
                    <div className="fixed top-0 right-0 h-screen w-full sm:w-96 bg-white p-6  overflow-y-auto">

                        <h2 className="text-2xl font-bold mb-6">
                            Edit Student
                        </h2>

                        <label className="block mb-2">
                            Student ID
                        </label>

                        <Input
                            value={selectedStudent?.id || ""}
                            disabled
                            className="border p-2 w-full mb-4"
                        />

                        <label className="block mb-2">
                            Name
                        </label>

                        <Input
                            value={editName}
                            disabled={!isEditing}
                            onChange={(e) => {
                                setEditName(e.target.value);
                                setEditNameError("");
                            }}
                            className="border p-2 w-full mb-6"
                        />
                        {EditNameError && (
                            <p className="text-red-500 text-sm mt-1">
                                {EditNameError}
                            </p>

                        )}

                        <label className="block mb-2">
                            Age
                        </label>

                        <Input
                            value={editAge || ""}
                            disabled={!isEditing}
                            onChange={(e) => {
                                setEditAge(e.target.value);
                                setEditAgeError("");
                            }}
                            className="border p-2 w-full mb-4"
                        />
                        {EditAgeError && (
                            <p className="text-red-500 text-sm mt-1">
                                {EditAgeError}
                            </p>

                        )}

                        <label className="block mb-2">
                            Gender
                        </label>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    disabled={!isEditing}
                                    className="w-full mb-6 justify-start"
                                >
                                    {editGender || "Select Gender"}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full">
                                <DropdownMenuItem
                                    onClick={() => {
                                        setEditGender("Male");
                                        setEditGenderError("");
                                    }}
                                >
                                    Male
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => {
                                        setEditGender("Female");
                                        setEditGenderError("");
                                    }}
                                >
                                    Female
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        {EditGenderError && (
                            <p className="text-red-500 text-sm mt-1">
                                {EditGenderError}
                            </p>

                        )}

                        <div className="flex gap-3">

                            {!isEditing ? (
                                <Button
                                    onClick={() => setIsEditing(true)}
                                    className="bg-yellow-500 text-white px-4 py-2"
                                >
                                    Edit
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={validateSaveChanges}
                                        className="bg-green-500 text-white px-4 py-2"
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        //onClick={() => deleteStudent(selectedStudent.id)
                                        onClick={() => setDeleteDialogOpen(true)}

                                        className="bg-red-500 text-white px-4 py-2"
                                    >
                                        Delete
                                    </Button>
                                </>
                            )}

                            <Button
                                onClick={() => {
                                    setIsDrawerOpen(false);
                                    setIsEditing(false);
                                }}
                                className="bg-red-500 text-white px-4 py-2"
                            >
                                Close
                            </Button>

                        </div>
                    </div>
                )}

                <Dialog
                    open={addDialogOpen}
                    onOpenChange={setAddDialogOpen}
                >
                    <DialogContent>

                        <DialogHeader>
                            <DialogTitle>
                                Add Student?
                            </DialogTitle>

                            <DialogDescription>
                                Are you sure you want to add this student?
                            </DialogDescription>
                        </DialogHeader>

                        <DialogFooter>

                            <Button
                                variant="outline"
                                onClick={() => setAddDialogOpen(false)}
                            >
                                No
                            </Button>

                            <Button
                                onClick={async () => {
                                    await addStudent1();
                                    setAddDialogOpen(false);
                                    setIsAddDrawerOpen(false);
                                }}
                            >
                                Yes
                            </Button>

                        </DialogFooter>

                    </DialogContent>
                </Dialog>
                <Dialog
                    open={deleteDialogOpen}
                    onOpenChange={setDeleteDialogOpen}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Are you sure?
                            </DialogTitle>
                            <DialogDescription>
                                Do you really want to delete this student?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setDeleteDialogOpen(false)}
                            >
                                No
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => {
                                    deleteStudent(selectedStudent.id);
                                    setDeleteDialogOpen(false);
                                }}
                            >
                                Yes
                            </Button>
                        </DialogFooter>
                    </DialogContent>

                </Dialog>


                <Dialog
                    open={saveChangesDialogOpen}
                    onOpenChange={setsaveChangesDialogOpen}
                >
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                Are you sure?
                            </DialogTitle>
                            <DialogDescription>
                                Do you really want to edit this student?
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => setsaveChangesDialogOpen(false)}
                            >
                                No
                            </Button>
                            <Button
                                onClick={async () => {
                                    await saveChanges();
                                    setsaveChangesDialogOpen(false);
                                }}
                            >
                                Yes
                            </Button>
                        </DialogFooter>
                    </DialogContent>

                </Dialog>
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
                    <div className="fixed top-5 right-2 left-2 sm:left-auto sm:right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
                        {successMessage}
                    </div>
                )}
                <div>
                    <footer className="mt-8 text-center">Footer</footer>
                </div>
            </div>
            {/* <Link href="/students">

                <h2 className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600 p-4">
                    Responsive Design
                </h2>

            </Link> */}


        </div>
    );
}
