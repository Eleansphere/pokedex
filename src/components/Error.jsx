export default function Error({ title, message, onConfirm }){
    return(
        <div className="error">
            <h2 className='text-red-600 font-bold text-xl'>{title}</h2>
            <p className='text-red-500 text-xs'>{message}</p>
            {onConfirm && (<div>
                
                <button onClick={onConfirm} className=" rounded-md p-2 text-white bg-green-700 hover:bg-green-400 w-1/2 mt-2">Close</button>
               
                 </div>
                 )}
        
        </div>
    );
}