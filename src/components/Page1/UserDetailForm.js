import React, { useState } from "react";
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

const provinces = [
  { code: "01", name: "Hà Nội" },
  { code: "02", name: "Hồ Chí Minh" },
  { code: "03", name: "Đà Nẵng" },
  { code: "04", name: "Hải Phòng" },
  { code: "05", name: "Cần Thơ" },
  { code: "06", name: "An Giang" },
  { code: "07", name: "Bà Rịa - Vũng Tàu" },
  { code: "08", name: "Bạc Liêu" },
  { code: "09", name: "Bắc Cạn" },
  { code: "10", name: "Bắc Giang" },
  { code: "11", name: "Bắc Ninh" },
  { code: "12", name: "Bến Tre" },
  { code: "13", name: "Bình Định" },
  { code: "14", name: "Bình Dương" },
  { code: "15", name: "Bình Phước" },
  { code: "16", name: "Bình Thuận" },
  { code: "17", name: "Cà Mau" },
  { code: "18", name: "Cao Bằng" },
  { code: "19", name: "Đắk Lắk" },
];
const districts = {
  "01": [
    { code: "001", name: "Ba Đình" },
    { code: "002", name: "Hoàn Kiếm" },
    { code: "003", name: "Tây Hồ" },
    { code: "004", name: "Long Biên" },
    { code: "005", name: "Cầu Giấy" },
    { code: "006", name: "Đống Đa" },
    { code: "007", name: "Hai Bà Trưng" },
    { code: "008", name: "Hoàng Mai" },
    { code: "009", name: "Thanh Xuân" },
    // add more districts here
  ],
  "02": [
    { code: "010", name: "Quận 1" },
    { code: "011", name: "Quận 2" },
    { code: "012", name: "Quận 3" },
    { code: "013", name: "Quận 4" },
    { code: "014", name: "Quận 5" },
    { code: "015", name: "Quận 6" },
    { code: "016", name: "Quận 7" },
    { code: "017", name: "Quận 8" },
    { code: "018", name: "Quận 9" },
    { code: "019", name: "Quận 10" },
    { code: "020", name: "Quận 11" },
    { code: "021", name: "Quận 12" },
    // add more districts here
  ],
  "03": [
    { code: "022", name: "Hải Châu" },
    { code: "023", name: "Sơn Trà" },
    { code: "024", name: "An Khê" },
    { code: "025", name: "Cẩm Lệ" },
    { code: "026", name: "Hòa Vang" },
    { code: "027", name: "Hoàng Sa" },
    { code: "028", name: "Liên Chiểu" },
    { code: "029", name: "Thanh Khê" },
    { code: "030", name: "Sơn Trà" },
    { code: "031", name: "Ngũ Hành Sơn" },
    // add more districts here
  ],
  // add more provinces here
};

const wards = {
  "001": [
    { code: "0001", name: "Phường Giảng Võ" },
    { code: "0002", name: "Phường Láng Hạ" },
    { code: "0003", name: "Phường Trúc Bạch" },
    { code: "0004", name: "Phường Vĩnh Phúc" },
  ],
  "022": [
    { code: "0007", name: "Phường Hòa Cường Bắc" },
    { code: "0008", name: "Phường Hòa Cường Nam" },
    { code: "0009", name: "Phường Hòa Thọ Tây" },
    { code: "0010", name: "Phường Hòa Thọ Đông" },
    { code: "0011", name: "Phường Hòa Xuân" },
    { code: "0012", name: "Phường Liên Chiểu" },
    { code: "0013", name: "Phường Ngũ Hành Sơn" },
    { code: "0014", name: "Phường Thanh Bình" },
    { code: "0015", name: "Phường Thanh Khê Đông" },
    { code: "0016", name: "Phường Thanh Khê Tây" },
  ],
  "023": [
    { code: "0017", name: "Phường Bình Hiên" },
    { code: "0018", name: "Phường Bình Tiên" },
    { code: "0019", name: "Phường Hòa An" },
    { code: "0020", name: "Phường Hòa Phát" },
    { code: "0021", name: "Phường Hòa Phú" },
    { code: "0022", name: "Phường Hòa Thọ" },
    { code: "0023", name: "Phường Hòa Xuân Tây" },
    { code: "0024", name: "Phường Phước Mỹ" },
    { code: "0025", name: "Phường Sơn Trà" },
    { code: "0026", name: "Phường Tân Chính" },
  ],
  "024": [
    { code: "0027", name: "Phường Tân Hòa" },
    { code: "0028", name: "Phường Tân Hòa Đông" },
    { code: "0029", name: "Phường Tân Phong" },
    { code: "0030", name: "Phường Tân Quý" },
    { code: "0031", name: "Phường Tân Quý Tây" },
    { code: "0032", name: "Phường Tân Sơn" },
    { code: "0033", name: "Phường Tân Thành" },
    { code: "0034", name: "Phường Thanh Bình" },
    { code: "0035", name: "Phường Thanh Khê" },
    { code: "0036", name: "Phường Thanh Lộc" },
    { code: "0037", name: "Phường Thanh Nhàn" },
  ],
  "025": [
    { code: "0038", name: "Phường An Hải Bắc" },
    { code: "0039", name: "Phường An Hải Nam" },
    { code: "0040", name: "Phường An Hải Tây" },
    { code: "0041", name: "Phường An Khê" },
  ],
  "026": [
    { code: "0043", name: "Phường Hòa Bắc" },
    { code: "0044", name: "Phường Hòa Châu" },
    { code: "0045", name: "Phường Hòa Hải" },
    { code: "0046", name: "Phường Hòa Hiệp Bắc" },
    { code: "0047", name: "Phường Hòa Hiệp Nam" },
    { code: "0048", name: "Phường Hòa Khương" },
    { code: "0049", name: "Phường Hòa Nam" },
    { code: "0050", name: "Phường Hòa Nhơn" },
    { code: "0051", name: "Phường Hòa Phú" },
    { code: "0052", name: "Phường Hòa Phước" },
    { code: "0053", name: "Phường Hòa Sơn" },
    { code: "0054", name: "Phường Hòa Thạnh" },
    { code: "0055", name: "Phường Hòa Thắng" },
    { code: "0056", name: "Phường Hòa Tiến" },
    { code: "0057", name: "Phường Hòa Xá" },
    { code: "0058", name: "Phường Phước Hòa" },
  ],
  "027": [
    { code: "0059", name: "Phường Hòa Bình" },
    { code: "0060", name: "Phường Hòa Minh" },
    { code: "0061", name: "Phường Hòa Trung" },
    { code: "0062", name: "Phường Hòa Tân" },
  ],
  "028": [
    { code: "0063", name: "Phường Bình Hưng" },
    { code: "0064", name: "Phường Bình Thạnh" },
    { code: "0065", name: "Phường Hiệp Bình Chánh" },
    { code: "0066", name: "Phường Hiệp Bình Phước" },
    { code: "0067", name: "Phường Hiệp Bình Trung" },
    { code: "0068", name: "Phường Lê Minh Xuân" },
    { code: "0069", name: "Phường Mỹ Phú" },
    { code: "0070", name: "Phường Phước Bình" },
    { code: "0071", name: "Phường Phước Long" },
    { code: "0072", name: "Phường Phước Mỹ" },
    { code: "0073", name: "Phường Phước Nhơn" },
    { code: "0074", name: "Phường Phước Trung" },
    { code: "0075", name: "Phường Tân Hưng" },
    { code: "0076", name: "Phường Tân Phú" },
  ],
  "029": [
    { code: "0077", name: "Phường Cẩm Lệ" },
    { code: "0078", name: "Phường Điện Ngọc" },
    { code: "0079", name: "Phường Điện Ngọc Hạ" },
    { code: "0080", name: "Phường Điện Ngọc Trung" },
    { code: "0081", name: "Phường Điện Phước" },
  ],
  "030": [
    { code: "0083", name: "Phường Hòa Cường Bắc" },
    { code: "0084", name: "Phường Hòa Cường Nam" },
    { code: "0085", name: "Phường Hòa Thuận Bắc" },
    { code: "0086", name: "Phường Hòa Thuận Nam" },
    { code: "0087", name: "Phường Hòa Thọ Tây" },
    { code: "0088", name: "Phường Hòa Thọ Đông" },
    { code: "0089", name: "Phường Hòa Trung" },
    { code: "0090", name: "Phường Phước Hòa" },
    { code: "0091", name: "Phường Tân Hòa" },
    { code: "0092", name: "Phường Tân Phú" },
  ],
  "031": [
    { code: "0093", name: "Phường Hòa Châu" },
    { code: "0094", name: "Phường Hòa Khánh Bắc" },
    { code: "0095", name: "Phường Hòa Khánh Nam" },
    { code: "0096", name: "Phường Hòa Lộc" },
    { code: "0097", name: "Phường Hòa Phong" },
    { code: "0098", name: "Phường Hòa Sơn" },
    { code: "0099", name: "Phường Hòa Tiến" },
    { code: "0100", name: "Phường Hòa Xá" },
    { code: "0101", name: "Phường Phước Hòa" },
  ],
};

function UserDetailForm() {
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
    // submit form data using your preferred method (e.g. HTTP request)
    alert(`Submitting form with data:
      Full Name: ${fullName}
      Address: ${provinces.find(pr => pr.code === address.provinceCode).name} ${districts[address.provinceCode].find(pr => pr.code === address.districtCode).name} ${wards[address.districtCode].find(pr => pr.code === address.wardCode).name} ${addressDetails}
      Phone: ${phone}
    `);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleAddressDetailChange = (event) => {
    setAddressDetails(event.target.value);
  };

  return (
    <div>
      {/* <Button variant="contained" color="primary" onClick={handleClick}>
        Open Form
      </Button> */}
      <Dialog open={showForm} onClose={handleClose}>
        <DialogTitle>Form</DialogTitle>
        <DialogContent>
          <DialogContentText>Fill out the form below:</DialogContentText>
          <form onSubmit={handleSubmit}>
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
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserDetailForm;
