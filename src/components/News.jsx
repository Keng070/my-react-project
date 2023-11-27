const News = () => {
  return (
    <div className="flex flex-wrap m-auto max-w-[1640px] py-6 md:py-10 lg:py-10 md:px-12 lg:px-12 ">
      <div className="flex  items-center justify-center pb-6 w-full">
        <h1 className="text-custom-blue font-bold text-4xl">Recent News</h1>
      </div>
      <div className="w-full flex items-center justify-center flex-wrap">
        <div className="min-w-[400px] max-h-[400px] home-page-card  flex-1 relative overflow-hidden rounded-[20px] m-2">
          <img
            className="object-cover w-full h-full duration-500"
            src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
          <div className="absolute bottom-0 bg-white w-full p-4 ">
            <p>September 10, 2024 by Ecommercestore</p>
            <p className="text-2xl font-bold ">How to choose perfect gadgets</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              officia amet, nulla excepturi laborum rem cumque
            </p>
          </div>
        </div>
        <div className="min-w-[400px] max-h-[400px] home-page-card  flex-1 relative overflow-hidden rounded-[20px] m-2">
          <img
            className="object-cover w-full h-full duration-500"
            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="absolute bottom-0 bg-white w-full p-4 ">
            <p>September 10, 2024 by Ecommercestore</p>
            <p className="text-2xl font-bold ">How to choose perfect gadgets</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              officia amet, nulla excepturi laborum rem cumque
            </p>
          </div>
        </div>
        <div className="min-w-[400px] max-h-[400px] home-page-card  flex-1 relative overflow-hidden rounded-[20px] m-2">
          <img
            className="object-cover w-full h-full duration-500"
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="absolute bottom-0 bg-white w-full p-4 ">
            <p>September 10, 2024 by Ecommercestore</p>
            <p className="text-2xl font-bold ">How to choose perfect gadgets</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              officia amet, nulla excepturi laborum rem cumque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
