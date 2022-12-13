import './Image_holder.css';
const ImageHolder = (props) =>{
 const {image} = props
 return(
    <>
        <div class="holder">
            <img alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"  />
            <p>Generated images will appear here!</p>
        </div>
    </>
 )
}

export default ImageHolder;
