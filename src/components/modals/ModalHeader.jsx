

const ModalHeader = ({title,subTitle}) => {
  return (
       <div className="text-center mb-4 md:mb-6">
          <h2 className="text-2xl md:text-4xl font-semibold ">{title}</h2>
          <p className="text-[#6D717F] self-stretch  text-base font-medium mt-1">
          {subTitle}
          </p>
        </div>
  )
}

export default ModalHeader