import React from 'react';
import FrontEnd from "../../assets/frontend.png";
import BackEnd from "../../assets/backend.png";
import MLDev from "../../assets/ml_developer.png";
import Python from "../../assets/python.png";
import "./about.css";


const About = () => {
    return (


        <section className="about section" id='about'>
            <h2 className="section__title">About Us</h2>
            <span className="section__subtitle">Meet the Dream Team - your Support System</span>

            <div className="about__container container">

                <div className="about__sections">

                    <div className="about__content">

                        <div className="about__data">
                            <h3 className="about__title">Ankit Deb</h3>
                            <span>Front End Developer</span>

                            <div className="about__info">
                                <img src={FrontEnd} alt="" />
                                <p className="about__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam.
                                </p>
                            </div>



                        </div>





                        <div className="about__data">
                            <h3 className="about__title">Surajkumar S</h3>
                            <span>Back End Developer</span>

                            <div className="about__info">
                                <img src={BackEnd} alt="" />
                                <p className="about__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam.
                                </p>
                            </div>



                        </div>
                        






                        <div className="about__data">
                            <h3 className="about__title">Ajinkya Deokate</h3>
                            <span>ML Developer</span>

                            <div className="about__info">
                                <img src={MLDev} alt="" />
                                <p className="about__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam.
                                </p>
                            </div>



                        </div>
                        






                        <div className="about__data">
                            <h3 className="about__title">Aditya Ojha</h3>
                            <span>ML Developer</span>

                            <div className="about__info">
                                <img src={MLDev} alt="" />
                                <p className="about__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam.
                                </p>
                            </div>



                        </div>
                        






                        <div className="about__data">
                            <h3 className="about__title">Prasad Deshmukh</h3>
                            <span>Python Developer</span>

                            <div className="about__info">
                                <img src={Python} alt="" />
                                <p className="about__description">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ullam.
                                </p>
                            </div>



                        </div>
                        

                        




                    </div>


                </div>





            </div>



        </section>



    )
}

export default About