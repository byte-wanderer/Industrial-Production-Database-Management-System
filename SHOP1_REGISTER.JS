import { useContext, useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { adddata } from "./context/ContextProvider";

const Shop1Register = () => {
    const { udata, setUdata } = useContext(adddata);
    
    const navigate = useNavigate("");

    const [inpval, setINP] = useState({
        model:"",
        date:"",
        totcn:"",
        totpin:"",
        cnmade:"",
        pinmade:"",
        cnbal:"",
        pinbal:"",
    });
    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {...preval, [name]: value };
        });
    };

    const addinpdata = async (e) => {
    e.preventDefault();

    const {
        model,
        date,
        totcn,
        totpin,
        cnmade,
        pinmade,
        cnbal,
        pinbal,
    } = inpval;
    if (model === "") {
        alert("Model is required");
    } else if (date === "") {
        alert("Date is required");
    } else if (totcn === "") {
        alert("Total Cn is required");
    } else if (totpin === "") {
        alert("Total Pin is required");
    } else if (cnmade === "") {
        alert("Cn Made is required");
    } else if (pinmade === "") {
        alert("Pin Made is required");
    } else if (cnbal === "") {
        alert("Cn Balance is required");
    } else if (pinbal === "") {
        alert("Pin Balance is required");
    } else {
        const res = await fetch("/createShop1", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model,
            date,
            totcn,
            totpin,
            cnmade,
            pinmade,
            cnbal,
            pinbal,
        })
    });

    const data = await res.json();

    if (res.status === 422 ||!data) {
    alert("Error");
    console.log("Error");
    } else {
        navigate("/Shop1");
        setUdata(data);
        console.log("Data added");
        }
    }
};
return (
<div>
    <div className="container">
        <div className="mt-3 mb-3">
            <NavLink className="btn btn-info" to="/shop1">SHOP1</NavLink>
        </div>
        <form className="container mt-4">
            <div className="row">
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                    <label for="InputModel" className="form-label">
                    MODEL
                    </label>
                    <input
                    type="text"
                    onChange={setdata}
                    value={inpval.model}
                    name="model"
                    className="form-control"
                    id="InputModel"
                    />
                </div>

                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputDate" className="form-label">
                    DATE
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.date}
                    name="date"
                    className="form-control"
                    id="InputDate"
                    />
                </div>

                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputTotalCn" class="form-label">
                    TOTAL CN
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.totcn}
                    name="totcn"
                    class="form-control"
                    id="InputTotalCn"
                    />
                </div>

                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputTotalPin" class="form-label">
                    TOTAL PIN
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.totpin}
                    name="totpin"
                    class="form-control"
                    id="InputTotalPin"
                    />
                </div>

                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputCnMade" className="form-label">
                    CN MADE
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.cnmade}
                    name="cnmade"
                    className="form-control"
                    id="InputCnMade"
                    />
                </div>

                <div className="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputPinMade" className="form-label">
                    PIN MADE
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.pinmade}
                    name="pinmade"
                    class="form-control"
                    id="InputPinMade"
                    />
                </div>

                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputCnBal" class="form-label">
                    CN BAL
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.cnbal}
                    name="cnbal"
                    class="form-control"
                    id="InputCnBal"
                    />
                </div>

                <div class="mb-3 col-lg-6 col-md-6 col-12">
                    <label for="InputPinBal" class="form-label">
                    PIN BAL
                    </label>
                    <input
                    type="number"
                    onChange={setdata}
                    value={inpval.pinbal}
                    name="pinbal"
                    class="form-control"
                    id="InputPinBal"
                    />
                </div>
                
                <button
                type="submit"
                onClick={addinpdata}
                class="btn btn-primary mt-4"
                >
                Submit
                </button>
            </div>
        </form>
    </div>
    </div>
    )
}

export default Shop1Register;