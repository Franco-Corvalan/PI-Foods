import React from "react"

function HeadlineCards() {
  

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        {/* Card */}
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Affiliated restaurants</p>
            <p className="px-2">Special Discounts</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/4869425/pexels-photo-4869425.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
      </div>

       {/* Card */}
       <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Desserts</p>
            <p className="px-2">Custom orders</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/1867524/pexels-photo-1867524.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"></img>
      </div>

       {/* Card */}
       <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">Fast food</p>
            <p className="px-2">Daily discounts</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>

    </div>
  )
}

export default HeadlineCards