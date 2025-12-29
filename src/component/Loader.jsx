import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="container mx-auto mb-10 p-9">
        <div className="grid sm:grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {/* <progress className='progress w-56'></progress> */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-6">
              <div className="skeleton h-50 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Loader