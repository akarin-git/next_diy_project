

export default function IineBtn({post,onSubmit}) {
// const onClick = (e) => {
//     e.preventDefault();
//     console.log(e)
   
// }
// console.log(post[0]);


  const handle = (e) => {
    console.log(id)
     e.preventDefault();
    onSubmit({id});
  }


    return (
        <div>
            <button onSubmit={handle.bind(this,post[0].id)}>
                いいね
            </button>
        </div>
    )
}
