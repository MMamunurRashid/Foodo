import { useEffect, useState } from "react";

const useStaff = (email) => {
  const [isStaff, setIsStaff] = useState(false);
  const [isStaffLoading, setIsStaffLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/staff/${email}`)
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setIsStaff(data.isStaff);
          setIsStaffLoading(false);
        });
    }
  }, [email]);
  return [isStaff, isStaffLoading];
};

export default useStaff;
