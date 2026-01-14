"use client";

import { CustomerInfo } from "@/app/hooks/use-cart-store";
import CardWithHeader from "../ui/card-with-header";
import { useState } from "react";

type TOrderInformation = {
  formData: CustomerInfo;
  setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};


const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
      const name = e.target.name as keyof CustomerInfo;
      let value = e.target.value;
            if (name === "customerContact") {
      value = value.replace(/[^0-9+]/g, "");
    }
    setFormData({ ...formData, [name]: value });
    return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const OrderInformation = () => {

}
  return (
    <CardWithHeader title="Order Information">
    <div className="bg-white">
        <div className="p-5">
             <div className="input-group">
          <label htmlFor="customerName">Full Name</label>
          <input type="text" placeholder="Type your full name" id="customerName" name="customerName" value={formData.customerName} onChange={handleInputChange} />
        </div>
        <div className="input-group">
          <label htmlFor="customerContact">Whatsapp Number</label>
          <input
            type="text"
            placeholder="+62xxxx"
            id="customerContact"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleInputChange}
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>
        <div className="input-group">
          <label htmlFor="customerAddress">Shipping Address</label>
          <textarea
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
            id="customerAddress"
            name="customerAddress"
            value={formData.customerAddress} onChange={handleInputChange}
            rows={7}
          />
        </div>
      </div>
    </div>
    </CardWithHeader>
  );
};
export default OrderInformation;