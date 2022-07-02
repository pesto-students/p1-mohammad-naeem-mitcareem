import { useState } from 'react';
import axios from 'axios'
import './form.css'
import copy from "copy-to-clipboard";
export default function Form() {
    const [url, setUrl] = useState("");
    const [shorten, setShorten] = useState("");

    const copyToClipboard = () => {
        copy(shorten);
        alert(`You have copied "${shorten}"`);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let base = "https://api.shrtco.de/v2/shorten?url=";
        let myurl = base + url;
        console.log(myurl);
        await axios
            .get(myurl)
            .then((res) => {
                setShorten(res.data.result.full_short_link);
                setUrl("");
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div className="body">
            <div className='header'>
                <h1>More than just shorten Links</h1>
                <br></br>
                <p>Build your brand's recognition and get detailed insight on how your links are performing.
                </p>
            </div>
            <br></br>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                    ></input>
                    <button valu="submit" name="submit">
                        Go
                    </button>
                </form>
            </div>
            <br></br>
            <div className='form'>
                <input
                    type="text"
                    value={shorten}
                    placeholder='Wait till the url appear' >
                </input>

                <button onClick={copyToClipboard}>
                    Copy to Clipboard
                </button>
            </div>
        </div>
    )
}