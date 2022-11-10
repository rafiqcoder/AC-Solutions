import React,{ useContext,useEffect,useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { DataContext,UserContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';

const Reviews = () => {
  const { refresh, setRefresh, } = useContext(DataContext);
  const { user } = useContext(UserContext);

  //loading state
  const [loadReview,setLoadReview] = useState(true);

  //storing data that get by email
  const [reviews,setReviews] = useState([]);
  
  // state to keep single review for editing
  const [reviewdata,setReview] = useState([]);
  
  UseTitle('Reviews');

  //getting reviews by email
  useEffect(() => {
  // getting reviews from backend and sending user token in header
     fetch(`https://acsolutions-server-n403euqde-rafiqcoder.vercel.app/reviews?email=${user?.email}`, {
       headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("auth-token")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
        //seting reviews
         setReviews(data);
        //setting loading state to false
         setLoadReview(false);
       })
       .catch((error) => console.log(error));
 },[setReviews,user,refresh]);
  
  
  const handleDelete = (id) => {
    // asking user to confirm delete
    const agree = window.confirm("Are you sure you want to delete this review?");
    if (agree) {
      // sending delete request to backend
      fetch(`https://acsolutions-server-n403euqde-rafiqcoder.vercel.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "deleted") {
          toast.success("Review Deleted Successfully");
          setRefresh(!refresh);
        }
      })
      .catch((error) => console.log(error));
    }
      
    
  };
  // handler function for update review
  const updateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewMsg = form.updatedMsg.value;
    // sending update request to backend
      fetch(`https://acsolutions-server-n403euqde-rafiqcoder.vercel.app/review-update/${reviewdata._id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ reviewMsg }),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "updated") {
          //showing success message
          toast.success("Review Updated Successfully");

          setRefresh(!refresh);
          const popup = document.getElementById("popup");
          popup.classList.add("hidden");
          popup.classList.remove("flex");
        }
      });
  }

  // click handler for to open popup
  const handleEdit=(id)=> {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.classList.add("flex");
    const review = reviews.find((review) => review._id === id);
    setReview(review);

  }
  // click handler for to close popup
  const closepopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    popup.classList.remove("flex");

  };

  // loding spinner
   if (loadReview) {
     return (
       <div className="bg-gray-100">
         <div className=" rounded relative">
           <div className="rounded-full bg-indigo-200 w-[190px] h-[190px] relative flex justify-center items-center mx-auto animate-spin">
             <svg
               className="absolute top-[2px] right-0"
               width={76}
               height={97}
               viewBox="0 0 76 97"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <mask id="path-1-inside-1_2495_2146" fill="white">
                 <path d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z" />
               </mask>
               <path
                 d="M76 97C76 75.6829 69.2552 54.9123 56.7313 37.6621C44.2074 20.4118 26.5466 7.56643 6.27743 0.964994L0.0860505 19.9752C16.343 25.2698 30.5078 35.5725 40.5526 49.408C50.5974 63.2436 56.007 79.9026 56.007 97H76Z"
                 stroke="#4338CA"
                 strokeWidth={40}
                 mask="url(#path-1-inside-1_2495_2146)"
               />
             </svg>
             <div className="rounded-full bg-white w-[150px] h-[150px]" />
           </div>
           <p className="absolute mx-auto inset-x-0 my-auto inset-y-[80px] text-base font-medium text-gray-800 text-center">
             Loading ...
           </p>
         </div>
       </div>
     );
   }

  return (
    <div
      className={`sm:overflow-x-auto w-full flex flex-cols ${
        reviews.length === 0 && "justify-center"
      }`}
    >
      {reviews.length > 0 ? (
        <table className=" sm:w-full mx-auto">
          <thead className="hidden">
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10 text-center ">
            {reviews.map((review) => (
              <tr
                key={review._id}
                className="flex flex-col w-[300px] bg-white justify-center p-6 rounded-lg"
              >
                <td>
                  <div className="flex items-center space-x-3 justify-center ">
                    <div className="">
                      <h2 className="font-bold text-center">
                        {review.serviceName}
                      </h2>
                    </div>
                  </div>
                </td>
                <td className="text-sm">
                  {review.reviewMsg}
                  <br />
                </td>
                <td>{review.price}</td>

                <th className="mt-6">
                  <Link
                    className="btn btn-primary mr-3 text-white btn-xs"
                    onClick={() => handleEdit(review._id)}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn bg-red-800 text-white btn-xs"
                    onClick={() => handleDelete(review._id)}
                  >
                    X
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
          // showing message if no review found
        <div className="flex  justify-center content-center items-center uppercase font-bold w-vw h-screen text-2xl text-center">
          <h1 className="text-center w-full">No review were Added</h1>
        </div>
      )}
      {/* popup for update review */}
      <div
        id="popup"
        className="hidden z-50 fixed w-full justify-center inset-0"
      >
        <div className="w-full h-full bg-gray-900 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Update Review</p>
                <button className="focus:outline-none" onClick={closepopup}>
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L7 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7L21 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <form
                className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7"
                onSubmit={updateReview}
              >
                <div className="mt-11">
                  <div className="mt-8">
                    <textarea
                      name="updatedMsg"
                      defaultValue={reviewdata.reviewMsg}
                      className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-9">
                  <button
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                    onClick={closepopup}
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                    Update Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;