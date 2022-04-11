import React from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import Html from "../../Components/Animations/SkillsAnimations/Html";
import Css from "../../Components/Animations/SkillsAnimations/Css";
import Testing from "../../Components/Animations/SkillsAnimations/Testing";
import Scss from "../../Components/Animations/SkillsAnimations/Scss";
import TypeScript from "../../Components/Animations/SkillsAnimations/TypeScript";
import JS from "../../Components/Animations/SkillsAnimations/JS";
import ReactA from "../../Components/Animations/SkillsAnimations/ReactA";
import SpringBoot from "../../Components/Animations/SkillsAnimations/SpringBoot";
import Java from "../../Components/Animations/SkillsAnimations/Java";
import Bootstrap from "../../Components/Animations/SkillsAnimations/Bootstrap";
import Python from "../../Components/Animations/SkillsAnimations/Python";
import MySQL from "../../Components/Animations/SkillsAnimations/MySQL";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__header">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(100)
              .typeString("Skills")
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h2>
      <div className="skills__container">
        <div class="skills__container__item">
          <Html />
        </div>
        <div class="skills__container__item">
          <Css />
        </div>
        <div class="skills__container__item">
          <Scss />
        </div>
        <div class="skills__container__item">
          <JS />
        </div>
        <div class="skills__container__item">
          <ReactA />
        </div>
        <div class="skills__container__item">
          <Java />
        </div>
        <div class="skills__container__item">
          <Bootstrap />
        </div>
        <div class="skills__container__item">
          <Python />
        </div>
        <div class="skills__container__item">
          <Testing  />
        </div>
        <div class="skills__container__item">
          <TypeScript />
        </div>
        <div class="skills__container__item">
          <MySQL />
        </div>
        <div class="skills__container__item">
          <SpringBoot />
        </div>
      </div>
    </section>
  );
};

export default Skills;
