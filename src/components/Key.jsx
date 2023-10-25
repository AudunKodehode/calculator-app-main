export default function Key({keyText, className, onClick, id}){
return (
    <>
    <button id={id} onClick={onClick} className={className}>{keyText}</button>
    </>
)
}