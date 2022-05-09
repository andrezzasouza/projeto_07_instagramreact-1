export default function User (props){
    return(
        <div class="user">
            <img src={`assets/img/${props.image}`}/>
        <div class="text">
            <strong>{props.user}</strong>
            {props.name}
        </div>
     </div>
    );
}