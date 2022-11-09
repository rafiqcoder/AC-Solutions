import React,{ useContext,useEffect,useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { DataContext, UserContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';

const Reviews = () => {
  const { refresh, setRefresh, } = useContext(DataContext);
  const { user } = useContext(UserContext);
  const [reviews, setReviews] = useState([]);
  console.log(reviews);
  const [reviewdata,setReview] = useState([]);
  UseTitle('Reviews');

 useEffect(() => {
  
     fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
       headers: {
         "Content-Type": "application/json",
         authorization: `Bearer ${localStorage.getItem("auth-token")}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);

         setReviews(data);
       })
       .catch((error) => console.log(error));
   
 },[setReviews,user]);
  
  
  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure you want to delete this review?");
    if ( agree ) {
      fetch(`http://localhost:5000/reviews/${id}`, {
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
  const updateReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewMsg = form.updatedMsg.value;
    fetch(`http://localhost:5000/review-update/${reviewdata._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ reviewMsg }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "updated") {
          toast.success("Review Updated Successfully");

          setRefresh(!refresh);
          const popup = document.getElementById("popup");
          popup.classList.add("hidden");
          popup.classList.remove("flex");
        }
      });
  }
  const handleEdit=(id)=> {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden");
    popup.classList.add("flex");
    const review = reviews.find((review) => review._id === id);
    setReview(review);

  }
  const closepopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    popup.classList.remove("flex");

  };


  



  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold">{review.serviceName}</div>
                  </div>
                </div>
              </td>
              <td className="text-sm">
                {review.reviewMsg}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {" "}
                  Support Technician
                </span>
              </td>
              <td>{review.price}</td>

              <th>
                <Link
                  // to={`/Reviews/${review._id}`}

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
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>

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
                    <textarea name='updatedMsg'
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
                  <button
                   
                    className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
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