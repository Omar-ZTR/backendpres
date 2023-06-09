import React, { useEffect, useReducer, useState } from "react";
import "./Add.css";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import cov from "../../img/aad.png"

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };            
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    await newRequest.post("/gigs", state);
    queryClient.invalidateQueries(["myGigs"]);
    navigate("/mygigs");
  } catch (err) {
    console.log(err);
  }
  };
  useEffect(()=> {
    AOS.init({duration: 1500})
  })

  return ( 
    <div className="add">
      <div className="container" data-aos="fade-up">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="info" data-aos="fade-up">
            <label htmlFor="" data-aos="fade-up">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange} data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">Category</label>
            <select name="cat" id="cat" onChange={handleChange} data-aos="fade-up">
              <option value=" repair & maintenance">repair & maintenance</option>
              <option value="Auto service">Auto service</option>
              <option value="cleaning">cleaning</option>
              <option value="transport">transport</option>

              <option value=" programming & tech">programming & tech</option>
              <option value="beauty ">beauty </option>
              <option value="cleaning">cleaning</option>
              <option value="textile">textile</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="" data-aos="fade-up">Cover Image</label>
                <input
                  type="file"
                  onChange={(e) => setSingleFile(e.target.files[0]) } data-aos="fade-up"
                />
                <label htmlFor="" data-aos="fade-up">Upload Images</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)} data-aos="fade-up"
                />
              </div>
              <button onClick={handleUpload} data-aos="fade-up">
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>
            <label htmlFor="" data-aos="fade-up">Description</label>
            <textarea
              name="desc"
              id=""
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            
          
          <div className="details">
            <label htmlFor="" data-aos="fade-up">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder=""
              onChange={handleChange}
            />
            <label htmlFor="" data-aos="fade-up">Short Description</label>
            <textarea
              name="shortDesc"
              onChange={handleChange}
              id=""
              placeholder="Short description of your service"
              cols="30"
              rows="10"
            ></textarea>
            
            <label htmlFor="" data-aos="fade-up">Add Features</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input type="text" placeholder="" />
              <button type="submit" data-aos="fade-up">add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((f) => (
                <div className="item" key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    } data-aos="fade-up"
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="" data-aos="fade-up">Price</label>
            <input type="number" onChange={handleChange} data-aos="fade-up" name="price" />
            <button onClick={handleSubmit}>Create</button>
          </div></div>
          <div className="cov">
            <img src={cov} alt="helo"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
