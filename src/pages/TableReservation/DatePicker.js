import React, { useState } from "react";
import "../../Font/Font.css";

const DatePicker = ({ register }) => {
  const today = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format
  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    console.log(selectedDate);
    setSelectedDate(selectedDate);
  };

  return (
    <div className=" pt-2 flex flex-col space-y-2">
      <label htmlFor="datePicker" className="text-sm font-medium text-white">
        Select a date:
      </label>
      <input
        type="date"
        id="datePicker"
        className="px-4 py-2  border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register("pickedDate", {
          required: "Table Number is Required",
        })}
        value={selectedDate}
        onChange={handleDateChange}
        min={today} // Set the minimum date allowed to the current date
        max={new Date(today).getFullYear() + 1 + "-12-31"} // Set the maximum date allowed (one year from today)
      />
    </div>
  );
};

export default DatePicker;
