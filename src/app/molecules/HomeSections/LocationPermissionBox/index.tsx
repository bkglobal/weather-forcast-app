function LocationPermissionBox() {
  return (
    <div className="flex justify-center items-center">
       <div className="text-center py-20">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl">
            Location is Disabled
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Kindly Enable the location and refresh again.
          </p>
        </div>
    </div>
  )
}

export default LocationPermissionBox;