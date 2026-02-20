import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
     <div className="shrink-0 h-full w-100 p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-sm">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-3xl font-bold">{data.taskTitle}</h2>
        <p className="text-lg mt-2">
          {data.taskDescription}
        </p>

      
      </div>

  )
}

export default AcceptTask
