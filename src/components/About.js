const About = () => {
  return (
    <div className="border border-orange-100 bg-orange-100">
      <h1 className=" font-mono px-2 pr-2 m-2 text-center text-2xl"> 🥘 About us</h1>
      <p className="italic p-4 m-2 mx-20 tracking-wide place-content-evenly hover:bg-orange-200 ">
        At Food App, food isn’t just fuel — it’s a story, a memory, a
        celebration. Born out of a love for bold flavors and fresh ingredients,
        we bring you dishes that are both comforting and adventurous. From
        locally-sourced produce to globally-inspired recipes, every plate we
        serve is made with care, creativity, and a dash of love. Whether you’re
        here for a quick bite or a full-course indulgence, we’re here to make
        every meal memorable.
      </p>
      <img
        className="p-4 m-4 h-48 w-96 object-cover rounded mx-auto hover:🐰"
        src="https://i.ibb.co/bgfL7Wvf/bunny.jpg"
        alt="Bunny"
      ></img>
      <h1 className="font-mono px-4 pr-2 m-4 text-center  text-2xl">
        {" "}
        👩‍🍳 About the Founder – Bunny
      </h1>
      <p className="italic p-4 m-2 mx-20 tracking-wide place-content-evenly hover:bg-orange-200 ">
        Bunny is the heart behind Food App. What started as his weekend passion
        project soon blossomed into a full-fledged culinary journey. With a deep
        love for home-cooked meals and an eye for detail, Bunny brought warmth,
        joy, and a touch of magic to every dish he created. His vision was
        simple: to spread happiness through food. Bunny’s belief that “good food
        feels like a hug” continues to inspire everything we serve today.
      </p>

      <h1 className="p-4 m-4 font-mono px-2 pr-2 text-center  text-2xl"> 🌟 Our Vision</h1>
      <p className="italic p-4 m-2 mx-20 tracking-wide place-content-evenly hover:bg-orange-200 ">
        At Food App, our vision is to redefine the way people experience
        food. We believe that every meal is an opportunity to create memories,
        bring people together, and celebrate culture. We envision a future where
        food is not just about taste, but about purpose—where ingredients are
        sourced responsibly, kitchens operate sustainably, and every plate tells
        a story of care and creativity. Our goal is to inspire joy, nourish
        communities, and lead the way in building a more connected and conscious
        food culture. Through innovation, integrity, and a love for flavor, we
        aim to be more than just a place to eat—we aim to be a part of people’s
        lives. today.
      </p>
    </div>
  );
};

export default About;
