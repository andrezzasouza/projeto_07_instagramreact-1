import Heart from "./HeartIcon";
import PaperPlaneIcon from "./PaperPlaneIcon";

function Post(props){
    return (
            <div class="post">
              <div class="top">
                <div class="user">
                  <img src={`assets/img/${props.user.image}`} />
                  {props.user.name}
                </div>
                <div class="actions">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="content">
                <img src={`assets/img/${props.content}`} />
              </div>

              <div class="bottom">
                <div class="actions">
                  <div>
                    <Heart />
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <PaperPlaneIcon />
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="likes">
                  <img src={`assets/img/${props.likes.friendImage}`} />
                  <div class="text">
                    Curtido por <strong>{props.likes.friend}</strong> e <strong>outras {props.likes.quantity} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default function Posts(){
    const posts = [
        {
            user : {
                name: "meowed",
                image: "meowed.svg", 
            },
            content: "gato-telefone.svg",
            likes: {
                friend: "respondeai",
                friendImage: "respondeai.svg",
                quantity: "101.523"
            }
        },
        {
            user : {
                name: "barked",
                image: "barked.svg", 
            },
            content: "dog.svg",
            likes: {
                friend: "adorable_animals",
                friendImage: "adorable_animals.svg",
                quantity: "99.159"
            }
        }];

        return (
            <div class="posts">
                {posts.map((post)=><Post user={post.user} content={post.content} likes={post.likes}/>)}
            </div>
        );
}