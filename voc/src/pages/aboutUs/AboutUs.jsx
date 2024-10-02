import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about">
      <h3 style={{ textAlign: "center" }}>ABOUT US</h3>

      <div className="wrapper">
        <p>
          Your course will develop a community of collaborative learners rather
          than individuals feeling lost in a sea of information because
          VocSchool uses a social media workflow to permit and encourage
          commenting and liking.
        </p>
        <p>
          This means that your course will also be able to leverage social
          media. Even though we always leave room for individualism, we give
          built-in galleries, wikis, and blog pages to showcase work, stimulate
          collaboration, and provide feedback from peers.
        </p>
        <p>
          In your role as an educator, you will receive support from a community
          of other educators who work in VocSchool. Additionally, you will be
          given training classes and continuing support to ensure that you have
          the resources necessary to provide the most beneficial experiences for
          your students.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
