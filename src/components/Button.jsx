export default function Button({ children, props }){
    return (<button className="rounded-md p-2 text-white bg-green-700 hover:bg-green-400 w-1/3"
     {...props}>
        {children}
    </button>);
}