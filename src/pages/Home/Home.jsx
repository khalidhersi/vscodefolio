import React from "react";
import "./Home.scss";
import Typewriter from "typewriter-effect";
import TextAnimation from "../../Components/TextAnimation/TextAnimation";
import NameTextAnimation from "../../Components/NameTextAnimation/NameTextAnimation";
import LastNameAnimation from "../../Components/LastNameAnimation/LastNameAnimation";
// import useSound from "use-sound";
// import melody from "../../assets/data/melody.wav";

const Home = () => {
  // const [play] = useSound(melody, { volume: 0.25 });

  return (
    <section className="landing sections">
      {/* <button onClick={play()} className="one-piece__song" /> */}
      <header className="landing__header">
        <TextAnimation />
        <NameTextAnimation />
        <LastNameAnimation />
        <div className="landing__header__desc">
          <span className="text-accent">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .typeString("Web Developer")
                  .deleteAll()
                  .typeString("Full-Stack Web Developer")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .start();
              }}
            />
          </span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(8700).typeString("based in London").start();
            }}
          />
          </div>
      </header>
    </section>
  );
};

export default Home;
