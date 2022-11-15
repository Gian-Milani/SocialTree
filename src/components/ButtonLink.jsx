
export function ButtonLink(props){

  return (
    <div className="flex flex-col mt-6 justify-center w-80 h-10 border-2 border-primary text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition duration-600">
      <a href={props.link} className="font-poppins font-bold">
        {props.social}
      </a>
    </div>
  )
}