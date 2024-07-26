import React, { useContext, useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";
import { adddata, deldata } from "./context/ContextProvider";
import { updatedata } from "./context/ContextProvider";
import axios from "axios";
const Home = () => {
    const [getUserdata, setUserdata] = useState([]);
    console.log(getUserdata);
    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updatedata);
    const { dltdata, setDLTdata } = useContext(deldata);
    useEffect(() => {
        const getdata = async () => {
        try {
            const res = await fetch("/getusers", {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            console.log(data);
            setUserdata(data);
            } catch (error) {
            console.log("error ");
        }   
    };
    getdata();
    }, []);
    const deleteuser = async (id) => {
        try {
            const res2 = await fetch(`/deleteuser/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const deletedata = await res2.json();
            console.log(deletedata);
            if (res2.status === 422 || !deletedata) {
                console.log("error");
            } else {
                console.log("user deleted");
                setDLTdata(deletedata);
                // getdata();   
                }
        } catch (error) {
        console.log("error");
   }
};


return (
    <>
    {udata ? (
        <>
        <div
        class="alert alert-success alert-dismissible fade show"
        role="alert"    
        >
        <strong>{udata.name}</strong> Model added successfully! {/* see */}
        <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        ></button>
        </div>
        </>
    ):(
    ""
)}
{updata ? (
    <>
    <div
    class="alert alert-success alert-dismissible fade show"
    role="alert"
    >
    <strong>{updata.name}</strong> Model updated successfully! {" "}
    {/* see */}
    <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    ></button>
    </div>
    </>
    ):(
    ""
)}


{dltdata ? (
    <>
    <div
    class="alert alert-danger alert-dismissible fade show"
    role="alert"
    >
    <strong>{dltdata.name}</strong> Model deleted successfully! {" "}
    {/* see */}
    <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
    ></button>
    </div>
    </>
    ) : (
    ""
)}

<div className="mt-5">
<div className="container">
<div className="add_btn">
<div className="button">

<NavLink to="/Shop1" className="btn btn-primary mb-3">
Shop 1
</NavLink>
<NavLink to="/" className="btn btn-primary mb-3">
Shop 2
</NavLink>
<NavLink to="/" className="btn btn-primary mb-3">
Shop 3
</NavLink>
<NavLink to="/register" className="btn btn-primary mb-3">
Add data
</NavLink>
</div>
</div>

<table className="table">
    <thead>
    <tr className="table-dark">
    <th scope="col">ID</th>
    <th scope="col">MODEL</th>
    <th scope="col">JSR</th>
    <th scope="col">LKW</th>
    <th scope="col">CKD/LIV</th>
    <th scope="col">PUNE</th>
    <th scope="col">SPD</th>
    <th scope="col">LKO ADV</th>
    <th scope="col">PUNE ADV</th>
    <th scope="col">TOTAL REQ</th>
    <th scope="col">MICO PROD</th>
    <th scope="col">MICO BAL</th>
    <th scope="col">EXTRA CN</th>
    <th scope="col">EXTRA PIN</th>
    <th scope="col">TOTAL CN</th>
    <th scope="col">TOTAL PIN</th>
    <th scope="col"></th>
    </tr>
    </thead>
<tbody>
    {getUserdata.map((getUserdata, index) => {
        return (
            <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{getUserdata.model}</td>
            <td>{getUserdata.jsr}</td>
            <td>{getUserdata.lkw}</td>
            <td>{getUserdata.ckdliv}</td>
            <td>{getUserdata.pune}</td>
            <td>{getUserdata.spd}</td>
            <td>{getUserdata.lkoadv}</td>
            <td>{getUserdata.puneadv}</td>
            <td>{getUserdata.totalrequired}</td>
            <td>{getUserdata.micoprod}</td>
            <td>{getUserdata.micobal}</td>
            <td>{getUserdata.excn}</td>
            <td>{getUserdata.expin}</td>
            <td>{getUserdata.totcn}</td>
            <td>{getUserdata.totpin}</td>
            <td className="d-flex justify-content-around">
                <NavLink to={`view/${getUserdata.id}`}>
                <button className="btn btn-success">
                    <VisibilityIcon />
                    </button>
                </NavLink>
                <NavLink to={`edit/${getUserdata.id}`}>
                {" "}
                <button className="btn btn-primary">
                    <EditIcon />
                </button>
            </NavLink>
            <button
                className="btn btn-danger"
                onClick={() => deleteuser(getUserdata.id)}
            >
            <DeleteIcon />
            </button>
            </td>
            </tr>
        );
    }
)}
</tbody>
</table>
</div>
</div>
</>
);
};


export default Home;