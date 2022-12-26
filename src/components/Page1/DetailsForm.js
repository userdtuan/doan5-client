import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
    Select,
    MenuItem,
    FormControl,
  } from "@material-ui/core";
  import { provinces, districts, wards } from "./addressList";


function DetailsForm({ open, onClose, onSubmit, onFullName,onAddress,onAddressDetails,onPhone }) {
      
        const [fullName, setFullName] = useState("");
        const [address, setAddress] = useState({});
        const [addressDetails, setAddressDetails] = useState("");
        const [phone, setPhone] = useState("");
      
        const handleSubmit = (event) => {
          event.preventDefault();
        //   onSubmit();
        //   alert(`Submitting form with data:
        //     Full Name: ${fullName}
        //     Address: ${provinces.find(pr => pr.code === address.provinceCode).name} ${districts[address.provinceCode].find(pr => pr.code === address.districtCode).name} ${wards[address.districtCode].find(pr => pr.code === address.wardCode).name} ${addressDetails}
        //     Phone: ${phone}
        //   `);
        };
      
        const handleFullNameChange = (event) => {
          setFullName(event.target.value);
          onFullName(event.target.value);
        };
      
        const handleAddressChange = (event) => {
          const { name, value } = event.target;
          setAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
          }));
          onAddress((prevAddress) => ({
            ...prevAddress,
            [name]: value,
          }));
        };
      
        const handlePhoneChange = (event) => {
          onPhone(event.target.value);
          setPhone(event.target.value);
        };
        const handleAddressDetailChange = (event) => {
          onAddressDetails(event.target.value);
          setAddressDetails(event.target.value);

        };

  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below:</DialogContentText>
          <form onSubmit={onSubmit}>
            <TextField
              label="Full Name"
              type="text"
              fullWidth
              margin="normal"
              required
              value={fullName}
              onChange={handleFullNameChange}
            />
            <FormControl fullWidth margin="normal">
              <Select
                name="provinceCode"
                value={address.provinceCode}
                onChange={handleAddressChange}
              >
                {provinces.map((province) => (
                  <MenuItem key={province.code} value={province.code}>
                    {province.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Select
                name="districtCode"
                value={address.districtCode}
                onChange={handleAddressChange}
              >
                {districts[address.provinceCode]?.map((district) => (
                  <MenuItem key={district.code} value={district.code}>
                    {district.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <Select
                name="wardCode"
                value={address.wardCode}
                onChange={handleAddressChange}
              >
                {wards[address.districtCode]?.map((ward) => (
                  <MenuItem key={ward.code} value={ward.code}>
                    {ward.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Address Details"
              type="text"
              fullWidth
              margin="normal"
              required
              value={addressDetails}
              onChange={handleAddressDetailChange}
            />
            <TextField
              label="Phone"
              type="tel"
              fullWidth
              margin="normal"
              required
              value={phone}
              onChange={handlePhoneChange}
            />
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Close
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
  );
}

export default DetailsForm;
