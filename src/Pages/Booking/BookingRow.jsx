import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { customerMassage, status, customerName, date, email, img, price, service, _id } = booking;
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{price}$</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ? <span className='text-primary'>confirmed</span> : <button onClick={()=> handleConfirm(_id)} className="btn btn-primary btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;