import { useState, useEffect } from "react";

export default function Meme() {
  const [allMemes, setAllMemes] = useState({});
  let meme_list = allMemes;
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    memeImg: "https://i.imgflip.com/30b1gx.jpg",
  });

  function get_meme_img() {
    return meme_list[Math.floor(Math.random() * 100)].url;
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((res) => setAllMemes(res.data.memes));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(meme);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row m-5">
          <div className="mb-3 col-lg-6">
            <input
              type="text"
              className="form-control"
              name="topText"
              placeholder="Top Text"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 col-lg-6">
            <input
              type="text"
              className="form-control"
              name="bottomText"
              placeholder="Bottom Text"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mx-5 d-grid">
          <button
            onClick={() =>
              setMeme((prevmeme) => ({ ...prevmeme, memeImg: get_meme_img() }))
            }
            className="btn btn-dark"
          >
            Get a new meme image
          </button>
        </div>
        <div className="fluid-container d-flex align-items-center justify-content-center my-5">
          <div>
            <img className="memeImg" src={meme.memeImg} alt="meme" />
          </div>
          <div className="memeText">
            <div className=" fluid-container memeTextTop">{meme.topText}</div>
            <div className="memeTextBottom">{meme.bottomText}</div>
          </div>
        </div>
      </form>
    </div>
  );
}
