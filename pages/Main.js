import React, { useState } from 'react'
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';

const Main = () => {
    const [Number, setNumber] = useState("");
    const [PTable, setPTable] = useState([]);
    const [PTable1, setPTable1] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [disabled, setDisabled] = useState(true)

    const inputEvent = (event) => {
        setNumber(event.target.value)
        if (event.target.value > 0) { setDisabled(false) }
        else { setDisabled(true) }
    }

    const PrintTable = () => {
        setPTable((oldTable) => {
            const result = PTable1.map((dd, ii) => {
                return (<p key={ii}>{Number} * {dd} = {Number * dd}</p>)
            })
            return [...oldTable, result];
        })
        setNumber("")
        setDisabled(true)
    }

    const deleteNumber = (id) => {
        const DeleteDatat = PTable.filter((curval, index) => { return id !== index })
        setPTable(DeleteDatat)
    }

    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Table</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">You Can Display Any Table In Math.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Number</label>
                                    <input value={Number} onChange={inputEvent} type="number" min={1} id="full-number" name="full-number" placeholder='Please enter any number' autoComplete='of' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 flex flex-col text-center lg:mx-64 w-full">
                                <Button disabled={disabled} onClick={PrintTable} variant="contained" className='flex'>
                                    <AddIcon />
                                </Button>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4 text-center">
                            {PTable.map((curValue, index) => {
                                return (
                                    <div key={index} className="p-4 md:w-1/4 sm:w-1/2 ">
                                        <DeleteIcon onClick={() => deleteNumber(index)} />
                                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-slate-400">
                                            <h6 className="title-font font-medium text-sm text-gray-900"> {curValue}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main