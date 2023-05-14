import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import banner from '../../assets/images/banner/Rectangle 1548.png'
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()

    const url = `http://localhost:3000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                } else {
                    navigate('/')
                }
            })
            .catch(error => console.error(error))
    }, [url, navigate])
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

    const handleConfirm = id => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'}),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) { 
                    // update bookings
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
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
                                    handleConfirm={handleConfirm}
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