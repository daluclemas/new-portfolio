import React from "react";
import Layout from "../Layout";

const HomePage = () => {
  return (
    <Layout>
      <section className="w-full mt-[60px] lg:mt-[80px] text-white relative min-h-[calc(100vh-80px)]">
        <div className="w-[90%] mx-auto xl:w-full xl:max-w-[1200px]"></div>

        <div className="absolute bg-malibu left-0 p-5 translate-y-[50%] top-[50%]">
          <ul className="flex flex-col">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
