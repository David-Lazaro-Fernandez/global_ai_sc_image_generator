import './Image_holder.css';
const Image_holder = (props) =>{
 const {image} = props
 return(
    <>
        <div class="holder">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1200px-Picture_icon_BLACK.svg.png"  />
            <p>Generated images will appear here!</p>
        </div>
    </>
 )
}

export default Image_holder;