import React from "react";
import "./Skills.scss";
import Html from "../../Components/Animations/SkillsAnimations/Html";
import Css from "../../Components/Animations/SkillsAnimations/Css";
import Net from "../../Components/Animations/SkillsAnimations/Net";
import Testing from "../../Components/Animations/SkillsAnimations/Testing";
import Scss from "../../Components/Animations/SkillsAnimations/Scss";
import TypeScript from "../../Components/Animations/SkillsAnimations/TypeScript";
import JS from "../../Components/Animations/SkillsAnimations/JS";
import ReactA from "../../Components/Animations/SkillsAnimations/ReactA";
import SpringBoot from "../../Components/Animations/SkillsAnimations/SpringBoot";
import Java from "../../Components/Animations/SkillsAnimations/Java";
import Bootstrap from "../../Components/Animations/SkillsAnimations/Bootstrap";
import Python from "../../Components/Animations/SkillsAnimations/Python";
import SQL from "../../Components/Animations/SkillsAnimations/SQL";
import Git from "../../Components/Animations/SkillsAnimations/Git";
import AzureCloud from "../../Components/Animations/SkillsAnimations/AzureCloud";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">        
        <div className="skills__container__item">
          <ReactA />
        </div>
        <div className="skills__container__item">
          <Net />
        </div>
        <div className="skills__container__item">
          <Java />
        </div>
        <div className="skills__container__item">
          <JS />
        </div>
        <div className="skills__container__item">
          <TypeScript />
        </div>
        <div className="skills__container__item">
          <AzureCloud />
        </div>
        <div className="skills__container__item">
          <Html />
        </div>
        <div className="skills__container__item">
          <Css />
        </div>
        <div className="skills__container__item">
          <Git />
        </div>
        <div className="skills__container__item">
          <Scss />
        </div>
        <div className="skills__container__item">
          <SQL />
        </div>
        <div className="skills__container__item">
          <Python />
        </div>
        <div className="skills__container__item">
          <SpringBoot />
        </div>
        <div className="skills__container__item">
          <Testing />
        </div>
        <div className="skills__container__item">
          <Bootstrap />
        </div>
      </div>
    </section>
  );
};

export default Skills;
