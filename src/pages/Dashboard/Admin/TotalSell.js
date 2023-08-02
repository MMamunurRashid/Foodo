import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from 'react-router-dom';
import { BounceLoader } from "react-spinners";
import useTitle from '../../../hooks/useTitle';

const TotalSell = () => {
    useTitle("Total Sell");
    const [selectedValue, setSelectedValue] = useState('Today');
    const [totalSellOrders, setTotalSellOrders] = useState([]);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();


    useEffect(() => {
        fetch(
            `https://foodo-server.vercel.app/total-sell?option=${selectedValue}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        }
        )
            .then((res) => res.json())
            .then((data) => setTotalSellOrders(data))
    }, [selectedValue,]);

    const handleSelectChange = (data) => {
        console.log(data.option);
        setSelectedValue(data.option);

    };

    const totalSell = totalSellOrders?.reduce((acc, obj) => acc + obj.totalPrice, 0);
    console.log(totalSell);


    //options 
    const options = [
        'Today', 'Yesterday', 'This Month', 'Last Month']


    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return (
            <div>
                <div className="flex justify-center items-center w-full h-screen">
                    <BounceLoader
                        color="#d63636"
                        cssOverride={{}}
                        loading
                        size={150}
                        speedMultiplier={1}
                    />
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Total Sell</h1>
            {/* <select onClick={handleSelect} className="select select-bordered w-full max-w-xs">
                <option selected>Today</option>
                <option>This Month</option>
                <option>Last Month</option>
            </select> */}
            <div onChange={handleSubmit(handleSelectChange)}>
                <label className="label">
                    <span className="label-text ">Select For Total Sell</span>
                </label>
                <select
                    {...register("option", {})}
                    className="select select-bordered w-full"
                >
                    {options.map((p, idx) => (
                        <option value={p} key={idx}>
                            {p}
                        </option>
                    ))}
                </select>
                {errors.option && (
                    <p className="text-red-500">{errors.option.message}</p>
                )}
            </div>
            <div className='mt-5'>
                <p className='text-xl'>Total No. of paid orders: {totalSellOrders?.length}</p>
            </div>
            <div className='mt-5'>
                <p className='text-xl'>Total Sell: ৳{totalSell}</p>
            </div>
        </div>
    );
};

export default TotalSell;