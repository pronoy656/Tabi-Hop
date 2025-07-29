

const ModalHeader = ({title,subTitle}) => {
  return (
       <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold ">{title}</h2>
          <p className="text-gray-700 self-stretch  text-base font-medium mt-1">
          {subTitle}
          </p>
        </div>
  )
}

export default ModalHeader