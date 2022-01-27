import React from "react";
import "./Skills.scss";
import Typewriter from "typewriter-effect";
import Html from "../Animations/SkillsAnimations/Html";
import Css from "../Animations/SkillsAnimations/Css";
import Testing from "../Animations/SkillsAnimations/Testing";
import Scss from "../Animations/SkillsAnimations/Scss";
import TypeScript from "../Animations/SkillsAnimations/TypeScript";
import JS from "../Animations/SkillsAnimations/JS";
import ReactA from "../Animations/SkillsAnimations/ReactA";
import SpringBoot from "../Animations/SkillsAnimations/SpringBoot";
import Java from "../Animations/SkillsAnimations/Java";
import Bootstrap from "../Animations/SkillsAnimations/Bootstrap";
import Python from "../Animations/SkillsAnimations/Python";
import MySQL from "../Animations/SkillsAnimations/MySQL";

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
