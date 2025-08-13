import React from "react";
import "./Skills.scss";
import Linux from "../../Components/Animations/SkillsAnimations/Linux";
import Docker from "../../Components/Animations/SkillsAnimations/Docker";
import Net from "../../Components/Animations/SkillsAnimations/Net";
import Testing from "../../Components/Animations/SkillsAnimations/Testing";
import TypeScript from "../../Components/Animations/SkillsAnimations/TypeScript";
import JS from "../../Components/Animations/SkillsAnimations/JS";
import ReactA from "../../Components/Animations/SkillsAnimations/ReactA";
import SpringBoot from "../../Components/Animations/SkillsAnimations/SpringBoot";
import Java from "../../Components/Animations/SkillsAnimations/Java";
import Python from "../../Components/Animations/SkillsAnimations/Python";
import SQL from "../../Components/Animations/SkillsAnimations/SQL";
import Git from "../../Components/Animations/SkillsAnimations/Git";
import AzureCloud from "../../Components/Animations/SkillsAnimations/AzureCloud";
import Terraform from "../../Components/Animations/SkillsAnimations/Terraform";
import Aws from "../../Components/Animations/SkillsAnimations/Aws";
import K8 from "../../Components/Animations/SkillsAnimations/K8";

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
          <Linux />
        </div>
        <div className="skills__container__item">
          <Docker />
        </div>
        <div className="skills__container__item">
          <Git />
        </div>
        <div className="skills__container__item">
          <Aws />
        </div>
        <div className="skills__container__item">
          <SQL />
        </div>
        <div className="skills__container__item">
          <Python />
        </div>
        <div className="skills__container__item">
          <K8 />
        </div>
        <div className="skills__container__item">
          <Testing />
        </div>
        <div className="skills__container__item">
          <Terraform />
        </div>
      </div>
    </section>
  );
};

export default Skills;
