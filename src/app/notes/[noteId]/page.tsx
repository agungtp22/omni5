export default function Notes({params}:{params:{
    noteId:String
}}){
    return (
        <div>{params.noteId}</div>
    )
}