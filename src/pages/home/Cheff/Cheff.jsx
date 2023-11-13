import React from "react";
import SectionTitle from "../../shared/SectionTitle";
import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.png'
const Cheff = () => {
  return (
    <div className="py-10">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="grid md:grid-cols-3 py-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img1}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Chicken Fry</h2>
          <p className=" text-slate-500 font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-500">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img2}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Caeser Salad</h2>
          <p className="text-slate-500 font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-500">Add To Cart</button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={img3}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Chicken Wings</h2>
          <p className="text-slate-500 font-semibold">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
          <div className="card-actions">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-500">Add To Cart</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cheff;
