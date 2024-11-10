import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import Pic from './pic.jpeg'
export default function AboutUs() {
  return (
    <div className="About__root--2Pc3I">
      <section className="StaticHero__heroRoot--2I0P4">
        <h1>About Us</h1>
      </section>
      <div className="About__aboutContainer--3Iz1x">
        <section className="About__aboutSection--3gKk1">
          <h2>Who we are</h2>
          <p>
            Welcome to BIThub, your essential academic companion tailored for
            B.Tech students preparing for both college and university
            examinations. Our platform is meticulously designed to empower
            B.Tech students with the resources they need to excel in their
            studies. As a dedicated hub, we provide a diverse range of study
            materials, practice exams, and expert guidance, all curated to align
            seamlessly with the rigorous demands of both college-level and
            university-level exams. Whether it's mastering complex concepts,
            revising key topics, or acing final assessments, BIThub is here to
            ensure that every student's educational journey is smooth,
            successful, and impactful. Join us in transforming your learning
            experience and achieving excellence in your B.Tech journey with
            BIThub.
          </p>
        </section>
        <section className="About__aboutSection--3gKk1">
          <div className="About__grid--37u4p">
            <div className="About__gridItem--2i8RR">
              <p className="About__stat--1uQwJ">1190+</p>
              <p className="About__statDesc--3CIZT">Total Users</p>
            </div>
            <div className="About__gridItem--2i8RR">
              <p className="About__stat--1uQwJ">15+</p>
              <p className="About__statDesc--3CIZT">Colleges</p>
            </div>
            <div className="About__gridItem--2i8RR">
              <p className="About__stat--1uQwJ">16+</p>
              <p className="About__statDesc--3CIZT">Contributers</p>
            </div>
            <div className="About__gridItem--2i8RR">
              <p className="About__stat--1uQwJ">320+</p>
              <p className="About__statDesc--3CIZT">Total Documents</p>
            </div>
          </div>
        </section>
        <section className="About__aboutSection--3gKk1">
          <h2>How We do it</h2>
          <p>
            At BIThub, we revolutionize B.Tech exam preparation through a
            dynamic blend of advanced technology, personalized guidance, and
            collaborative learning. We curate comprehensive study materials,
            offer realistic practice exams, and provide insightful analytics for
            self-assessment. Our platform thrives on community engagement,
            connecting students to a network of peers and experts for mutual
            support. With BIThub, B.Tech students access a transformative
            approach to learning that equips them with the skills, knowledge,
            and confidence needed to excel in college and university exams.
          </p>
        </section>

        <section className="About__aboutSection--3gKk1">
          <h2>Our Leadership Team</h2>
          <div className="About__grid--37u4p About__gridFounders--XwcDM">
            
            <div className="About__gridItem--2i8RR About__founder--5uSj-">
              <div className="LazyLoadImage__imageContainer--3EOU_ About__containerClass--ivDpA">
                <div className="TemplateShimmer__shimmer--1HNwN TemplateShimmer__shimmerWrapper--Py2CJ TemplateShimmer__hidden--1oL9u"></div>
                <img
                  className=""
                  src={Pic}
                />
              </div>
              <p className="About__name--3Fziu">Pranav Pathekar</p>
              <p className="About__title--1V3Sy">Founder</p>
              <div className="About__socialCotainer--2-gNa">
                <Link to="">
                  <img src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_category/images/growth/home-screen/1634896008747-b314ff.png" />
                </Link>
                <Link to="https://github.com/Unravel-Pranav">
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                </Link>
              </div>
              <p className="About__desc--1Ke24">
                Pranav is a versatile full-stack developer adept in MERN
                Stack. As the founder of BIThub, he's committed to
                sharing web development resources and knowledge.Pranav's
                diverse application portfolio highlights his technical prowess
                and dedication to community-driven learning.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
