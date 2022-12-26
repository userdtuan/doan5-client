import React, { useState } from "react";
import DetailsForm from "./DetailsForm";
import { Button } from "@material-ui/core";
import { provinces, districts, wards } from "./addressList";

function Page1() {
  const [showForm, setShowForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState({});
  const [addressDetails, setAddressDetails] = useState("");
  const [phone, setPhone] = useState("");

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting form with data:
            Full Name: ${fullName}
            Address: ${
              provinces.find((pr) => pr.code === address.provinceCode).name
            } ${
      districts[address.provinceCode].find(
        (pr) => pr.code === address.districtCode
      ).name
    } ${
      wards[address.districtCode].find((pr) => pr.code === address.wardCode)
        .name
    } ${addressDetails}
            Phone: ${phone}
          `);
          setShowForm(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open Form
      </Button>
      <DetailsForm
        open={showForm}
        onClose={handleClose}
        onSubmit={handleSubmit}
        onFullName={setFullName}
        onAddress={setAddress}
        onAddressDetails={setAddressDetails}
        onPhone={setPhone}
      />
    </div>
  );
}
export default Page1;
