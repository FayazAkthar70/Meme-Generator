import { useState } from 'react';
import data from './data.js';

export default function Meme() {
    const meme_list = data.data.memes
    function get_meme_img() {
        return meme_list[Math.floor(Math.random() * 100)].url
    }
    let [memeImg, setMemeImg] = useState(get_meme_img())

    return (
        <div>
            <form>
                <div className="row m-5">
                    <div className="mb-3 col-lg-6">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Top Text"/>
                    </div>
                    <div className="mb-3 col-lg-6">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Bottom Text"/>
                    </div>
                </div>
                    <div className="mx-5 d-grid">
                    <button onClick={()=>setMemeImg(get_meme_img())} type="button" className="btn btn-dark">Get a new meme image</button>
                </div>
                <div className='fluid-container d-flex align-items-center justify-content-center my-5'>
                    <img src={memeImg} width='500px' alt='meme'/>
                </div>  
            </form>
        </div>
    )
}