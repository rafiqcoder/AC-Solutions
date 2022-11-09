import React,{ useContext,useEffect,useState } from 'react';
import toast from 'react-hot-toast';
import { DataContext } from '../../Context/Context';
import UseTitle from '../../hooks/UseTitle';

const AddServices = () => {
  const [order,setOrder] = useState(1);
  const { services,refresh,setRefresh } = useContext(DataContext);

  UseTitle('Add Services');

  useEffect(() => {
    setOrder(services.length + 1);
  },[services])
  console.log(order);
  const handleAddService = (e) => {
    e.preventDefault();

    const form = e.target;
    const id = order;
    const name = form.name.value;
    const price = form.price.value;
    const desc = form.desc.value;
    const image = form.img.value;
    const service = { name, price, desc, image, id };

    fetch("http://localhost:5000/add-service", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Service Added Successfully");
          setRefresh(!refresh);
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10">
      <form onSubmit={handleAddService} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea
            name="desc"
            className="textarea h-24 textarea-bordered"
            placeholder="Short Description"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service image Link</span>
          </label>
          <input
            type="text"
            name="img"
            placeholder="Service image Link"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Service price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            add New
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddServices;