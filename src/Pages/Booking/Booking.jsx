import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import banner from '../../assets/images/banner/Rectangle 1548.png'
import BookingRow from './BookingRow';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:3000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    console.log(bookings);
    const handleDelete = id => { 
        const proceed = confirm('Are you sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) { 
                        alert('Deleted Successfully')
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
        }
    }
    return (
        <div className='mt-[50px] mb-[130px]'>
            <div className='mb-[130px] relative rounded-xl border border-primary'>
                <img className='w-full' src={banner} alt="" />
                <div className='absolute rounded-xl inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-20'>
                    <h1 className='text-[45px] mt-10 text-white font-bold'>Cart Details</h1>
                    <div className='absolute bottom-0 left-[40%] bg-primary py-2 px-20' style={{ clipPath: 'polygon(15% 0, 85% 0%, 100% 100%, 0% 100%)' }}>
                        <p className='text-white text-xl'>Home - Product Details</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <tbody>
                            {/* row 1 */}
                            {
                                bookings.map(booking => <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                ></BookingRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Booking;