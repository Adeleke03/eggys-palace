import React,{useState, useEffect} from 'react'

const CheckoutForm = () => {
   // State for recipient information
   const [recipientInfo, setRecipientInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  // State for delivery information
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    city: "",
    state: "",
  });

  // State to control modals
  const [showRecipientModal, setShowRecipientModal] = useState(false);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  // State for error messages
  const [recipientError, setRecipientError] = useState("");
  const [deliveryError, setDeliveryError] = useState("");

  // Load data from local storage on component mount
  useEffect(() => {
    const savedRecipientInfo = JSON.parse(
      localStorage.getItem("recipientInfo")
    );
    const savedDeliveryInfo = JSON.parse(localStorage.getItem("deliveryInfo"));

    if (savedRecipientInfo) {
      setRecipientInfo(savedRecipientInfo);
    }
    if (savedDeliveryInfo) {
      setDeliveryInfo(savedDeliveryInfo);
    }
  }, []);

  // Handle recipient form submission
  const handleRecipientSubmit = (data) => {
    if (!data.fullName || !data.phoneNumber || !data.email) {
      setRecipientError("All fields are required.");
      return;
    }
    setRecipientInfo(data);
    localStorage.setItem("recipientInfo", JSON.stringify(data)); // Save to local storage
    setRecipientError("");
    setShowRecipientModal(false);
  };

  // Handle delivery form submission
  const handleDeliverySubmit = (data) => {
    if (!data.address || !data.city || !data.state) {
      setDeliveryError("All fields are required.");
      return;
    }
    setDeliveryInfo(data);
    localStorage.setItem("deliveryInfo", JSON.stringify(data)); // Save to local storage
    setDeliveryError("");
    setShowDeliveryModal(false);
  };

  // Clear local storage data (optional)
  const clearLocalStorage = () => {
    localStorage.removeItem("recipientInfo");
    localStorage.removeItem("deliveryInfo");
    setRecipientInfo({ fullName: "", phoneNumber: "", email: "" });
    setDeliveryInfo({ address: "", city: "", state: "" });
  };
  return (
    <div className="md:col-span-2 rounded-[10px] mt-3 bg-[#100101] h-fit ">
      
    <div className="">
      {/* Recipient Information Section */}
      <div className=" bg-[#252422] mb-6 mx-auto w-[95%] rounded-[11px] mt-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mt-6 mx-4">
            Recipient Information
          </h2>

          <button
            onClick={() => setShowRecipientModal(true)}
            className="text-[#B67B0F] mx-4 px-4 py-2 my-4"
          >
            {recipientInfo.fullName
              ? "Edit"
              : "Add"}
          </button>
        </div>
        <hr className="mx-4" />

        {recipientInfo.fullName && (
          <div className="mt-4">
            <p className= "mx-4 my-2">{recipientInfo.fullName}</p>
            <p className= "mx-4 my-2">{recipientInfo.phoneNumber}</p>
            <p className= "mx-4 my-2">{recipientInfo.email}</p>
          </div>
        )}
      </div>

      {/* Delivery Information Section */}
      <div className=" bg-[#252422] mb-6 mx-auto w-[95%]  mt-6 rounded-[11px]">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold mx-4 mt-6">
            Delivery Information
          </h2>{" "}
          <button
            onClick={() => setShowDeliveryModal(true)}
            className="text-[#B67B0F]  px-4 py-2 my-4 mx-4"
          >
            {deliveryInfo.address
              ? "Change"
              : "Add"}
          </button>
        </div>
        <hr className="mx-4" />

        {deliveryInfo.address && (
          <div className="mt-4 flex mx-4">
            <p className= "my-2">{deliveryInfo.address},</p>
            <p className= "my-2"> {deliveryInfo.city},</p>
            <p className= "my-2">{deliveryInfo.state}.</p>
          </div>
          
        )}
        
      </div>
      <div className=" bg-[#252422] mb-6  rounded-[11px]">
                <h3 className="text-xl font-semibold mt-6 mx-4 text-white">Payment Method</h3>
              </div>

      {/* Clear Data Button (Optional) */}
      <button
        onClick={clearLocalStorage}
        className="bg-[#B67B0F] mx-4  text-white px-4 py-2 rounded hover:bg-[#A56C0D]"
      >
        Clear All Data
      </button>

      {/* Recipient Modal */}
      {showRecipientModal && (
        <div className="fixed inset-0 main-wrapper  bg-no-repeat bg-cover bg-center bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Recipient Information</h2>
            {recipientError && (
              <p className="text-red-500 text-sm mb-4">{recipientError}</p>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleRecipientSubmit({
                  fullName: e.target.fullName.value,
                  phoneNumber: e.target.phoneNumber.value,
                  email: e.target.email.value,
                });
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={recipientInfo.fullName}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  defaultValue={recipientInfo.phoneNumber}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  defaultValue={recipientInfo.email}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowRecipientModal(false)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#B67B0F] text-white rounded hover:bg-[#A56C0D]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delivery Modal */}
      {showDeliveryModal && (
        <div className="fixed inset-0 main-wrapper  bg-no-repeat bg-cover bg-center bg-opacity-50 flex items-center justify-center">
          <div className="bg-black p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
            {deliveryError && (
              <p className="text-red-500 text-sm mb-4">{deliveryError}</p>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleDeliverySubmit({
                  address: e.target.address.value,
                  city: e.target.city.value,
                  state: e.target.state.value,
                });
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  defaultValue={deliveryInfo.address}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  defaultValue={deliveryInfo.city}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  defaultValue={deliveryInfo.state}
                  className="w-full px-3 py-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowDeliveryModal(false)}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#B67B0F] text-white rounded hover:bg-[#A56C0D]"
                >
                  Save
                </button>
              </div>
              
            </form>
          </div>
        </div>
      )}
    </div>
      
    </div>
  )
}

export default CheckoutForm
