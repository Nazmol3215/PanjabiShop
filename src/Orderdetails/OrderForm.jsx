import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CheckoutForm = () => {
  const [shippingCost, setShippingCost] = useState(150);

  const handleShippingChange = (event) => {
    setShippingCost(Number(event.target.value));
  };

  const subtotal = 5920;
  const total = subtotal + shippingCost;

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger">
        অর্ডার করার পরে আমাদের প্রতিনিধি আপনাকে কল করে পণ্যটির সাইজ ও মূল্য কনফার্ম করে নিবে।
      </h2>
      <div className="row mt-4">
        {/* Left Side: Form */}
        <div className="col-md-6">
          <div className="p-4" style={{ backgroundColor: "#d8faff", borderRadius: "10px" }}>
            <h4 className="mb-3">আপনার তথ্য:</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  আপনার নাম:
                </label>
                <input type="text" id="name" className="form-control" placeholder="আপনার নাম লিখুন" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  সম্পূর্ণ ঠিকানা:
                </label>
                <input type="text" id="address" className="form-control" placeholder="আপনার ঠিকানা লিখুন" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  মোবাইল:
                </label>
                <input type="text" id="phone" className="form-control" placeholder="আপনার মোবাইল নাম্বার লিখুন" />
              </div>
              <div className="mb-3">
                <label className="form-label">Shipping</label>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shipping"
                      value="80"
                      id="insideDhaka"
                      checked={shippingCost === 80}
                      onChange={handleShippingChange}
                    />
                    <label className="form-check-label" htmlFor="insideDhaka">
                      ঢাকার মধ্যে: ৳ ৮০
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="shipping"
                      value="150"
                      id="outsideDhaka"
                      checked={shippingCost === 150}
                      onChange={handleShippingChange}
                    />
                    <label className="form-check-label" htmlFor="outsideDhaka">
                      ঢাকার বাইরে: ৳ ১৫০
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                অর্ডার প্রেস করুন
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="col-md-6">
          <div className="p-4 border rounded">
            <h4 className="mb-3">Order Summary</h4>
            <table className="table">
              <tbody>
                <tr>
                  <td>Product</td>
                  <td>গ্রাস কালার</td>
                </tr>
                <tr>
                  <td>Code</td>
                  <td>৪৫১</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>৳ {subtotal}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>৳ {shippingCost}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>৳ {total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
