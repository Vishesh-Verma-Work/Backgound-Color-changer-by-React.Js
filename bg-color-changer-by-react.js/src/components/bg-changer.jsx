import React, { useState } from "react";

function Bg(props) {
    const [color, setColor] = useState("grey")

    return (
        <div className='w-full h-screen duration-500' style={{ backgroundColor: color }}>






            <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 py-3  bg-black'>
                <div className='flex flex-wrap bg-white rounded-md px-2 py-2 justify-center gap-3 shadow-lg'>

                    {/* <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button> */}

                    {props.channel.map((color, index) => (
                        <button key={index} className='outline-none px-4 py-1 rounded-md text-white text-lg  shadow-lg'
                            style={{ backgroundColor: color }} onClick={() => setColor( color )}>{color}</button>
                    ))}



                    {/* 
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "blue" }}>Blue</button>
                    <button className='outline-none px-4 py-1 rounded-md text-black shadow-lg'
                        style={{ backgroundColor: "yellow" }}>Yellow</button>
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "green" }}>Green</button>
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "black" }}>Black</button>
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "orange" }}>Orange</button>
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "purple" }}>Purple</button>
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "Coral" }}>Coral</button>
                    <button className='outline-none px-4 py-1 rounded-md text-black shadow-lg'
                        style={{ backgroundColor: "Lime" }}>Lime</button>
                    <button className='outline-none px-4 py-1 rounded-md text-black shadow-lg'
                        style={{ backgroundColor: "pink" }}>pink</button>
                    <button className='outline-none px-4 py-1 rounded-md text-black shadow-lg'
                        style={{ backgroundColor: "Cyan" }}>Cyan</button>
                    <button className='outline-none px-4 py-1 rounded-md text-white shadow-lg'
                        style={{ backgroundColor: "Maroon" }}>Maroon</button> */}
                </div>
            </div>
        </div>
    )
}

export default Bg