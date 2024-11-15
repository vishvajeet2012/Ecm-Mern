function FailedTask(value) {
    return ( 
        <>
              <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-600 text-sm px-3 py-2 rounded">{value.data.category}</h3>
          <h4 className=" text-sm">{value.data.value}</h4>
          </div>
          <h2 className="mt-5 text-xl font-semibold  ">{value.data.title}</h2>
          <p className="text-sm mt-2 ">{value.data.description}</p>

        </div>

        </>
     );
}

export default FailedTask;