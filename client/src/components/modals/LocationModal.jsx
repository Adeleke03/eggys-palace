import { useEffect, useRef } from "react";
import navLogo from "../../assets/nav-logo.svg"

const LocationModal = ({ onLocationSelect }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const savedLocation = localStorage.getItem("userLocation");
    // console.log("Saved Location:", savedLocation); 

    if (!savedLocation && modalRef.current) {
        // document.body.classList.add("modal-open");

        modalRef.current?.showModal();
        // setTimeout(() => {
        //     modalRef.current?.showModal();
        //   }, 1000);    
        
        }
  }, []);

  const handleSelectLocation = (location) => {
    localStorage.setItem("userLocation", location);
    onLocationSelect(location);
    
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <dialog ref={modalRef} className="modal ">
      <div className="modal-box  pb-10">
        <div className="flex justify-center">

        <img src={navLogo} alt="bg-black"   className="bg-black rounded-[10px] p-2"/>
        </div>
        <h3 className="font-bold text-lg text-center py-6">What's your location?</h3>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {["Lagos", "Abuja", "Benin"].map((city) => (
            <button
              key={city}
              onClick={() => handleSelectLocation(city)}
              className="p-3 border rounded-lg hover:bg-gray-100 hover:text-black cursor-pointer"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </dialog>
  );
};

export default LocationModal;
