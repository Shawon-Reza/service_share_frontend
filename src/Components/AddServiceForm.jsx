import React from 'react'
import Navbar from './Navbar'
import { Footer } from './Footer'

const AddServiceForm = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <div className=''>
                <Navbar></Navbar>
            </div>

            <h1 className='text-center flex-grow mt-20 mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold'>SERVICE AGREMENT FORM</h1>

            <p className='mb-10 py-6 btn font-bold md:text-xl lg:text-2xl'>Service Details</p>

            <form className="w-full">
                <div className="flex flex-col sm:flex-row justify-between gap-6">

                    {/* Service Title */}
                    <div className="flex-1 flex flex-col">
                        <label className="font-medium mb-1">Service Title:</label>
                        <input
                            type="text"
                            className="w-full border rounded px-3 py-2"
                            placeholder="Enter service title"
                            required
                        />
                    </div>

                    {/* Service Categories */}
                    <div className="flex-1 flex flex-col">
                        <label className="font-medium mb-1">Service Categories:</label>
                        <select className="w-full border rounded px-3 py-2" required>
                            <option value="">Select a category</option>
                            <option value="Plumber">Plumber</option>
                            <option value="Cleaner">Cleaner</option>
                            <option value="Gardener">Gardener</option>
                            <option value="Electrician">Electrician</option>
                            <option value="Tutor">Tutor</option>
                            <option value="Mechanic">Mechanic</option>
                            <option value="Painter">Painter</option>
                        </select>
                    </div>

                </div>
            </form>



            <div>
                <Footer></Footer>
            </div>
        </div>

    )
}

export default AddServiceForm