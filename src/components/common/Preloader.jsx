import preloaderGif from "../../assets/images/preloaderGif.gif";

let Preloader = (props) => {
    return (
        <div >
            <img src={preloaderGif} alt="" style={{ height: '100px' }} />
        </div>
    );
}

export default Preloader;
