import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../cssfile/home.css'
import imgone from '../../Assetss/How-to-Learn-Web-Development-300x298.png'
import { ImDownload } from "react-icons/im";
import imgtwo from '../../Assetss/hp-mysql-development-and-much-more-web-developer-clipart-11563204305ktl1eg7vwo-removebg-preview.png'
import car from '../../Assetss/Untitled design 1.png'
import creamycuddle from '../../Assetss/creamycuddle  .jpg'
import portfolio from '../../Assetss/Screenshot (325).png'
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";

const Home = () => {
    return (
        <>
            <div className='backgroundcolor'>
                <Navbar />
                <div className='m-2'>
                    <div className='mt-5'>
                        <div className="row align-items-center " >
                            <div className=" " style={{ display: "flex" }}>
                                
                                <div className='col-md-7'>
                                    <h2 className='fontfamily text-start'>
                                        Hi, I'm <span className='color'>Achal Dharmale </span><br />
                                        I Tell Stories Through <span style={{ textDecoration: "underline", color: ' rgb(146, 88, 88)' }}>Code</span>
                                    </h2>
                                    <p className='mt-3 fontfamily fontt text-start' style={{ fontSize: "23px" }}>
                                        As a Front-end Developer,
                                        I specialize in developing dynamic and responsive applications.
                                        motivates me to continuously learn and apply the latest advancements in the field.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='text-start  mb-5 mt-4'>
                        <a href='https://drive.google.com/file/d/1BCbs2stDqM9TONOoPQqyKXKbPwyOngAD/view?usp=drive_link'
                            className='btn btn-outline-success  fontsize fontfamily'>
                            Resume <ImDownload />
                        </a>
                    </div>


                    <div>
                        <h2 className='text-start m-2 color fontfamily font'>My Journey</h2>
                        <div className='mt-5 '>
                            <div className='row align-items-center d-flex'>
                                <div className='col-md-7'>
                                    <p className='text-start fontfamily fontt'>
                                        Hello! My name is Achal Dharmale , and I am currently done my course which is React Front-end Developer in Jan 2024.
                                    </p>
                                    <p className='text-start fontfamily fontt'>
                                        My Journey to becoming a Website Developer began in Aug 2023,
                                        with the support of the Complete Java classNamees (CJC) in Pune .
                                        At that time , I only had a basic Knowladge of programming,
                                        but i continuously working on my self and get deeper Knowladge
                                        in programming. This decision marked the start of an incredible learning experience.
                                    </p>
                                    <p className='text-start fontfamily fontt'>
                                        I extensively utilized the resources provided in React Frontend Developer classNamees,
                                        which help me build a solid foundation in Website Development.
                                        Over time, I have honed My skills and now specialize in Reactjs.
                                        I am pround to say that I can independently create Website .
                                    </p>
                                    <p className='text-start fontfamily fontt'>
                                        Graduation : Bachelor of Bussiness Administration (BBA), AMT.
                                        <br />
                                        Email: <span style={{ color: 'blue' }}>achaldharmale62978@gmail.com </span>
                                        <br />
                                        Location: Maharashtra,India
                                        <br /><br />
                                        Technical Skills:
                                        <ul className='color'>
                                            <li className='color'>HTML</li>
                                            <li className='color'>CSS</li>
                                            <li className='color'>JavaScript</li>
                                            <li className='color'>Reactjs</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className=' '>
                                    <img src={imgtwo} className='imgtwoo img-fuild  card-img-top' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h2 className='color font fontfamily text-start'>Some of My Personal Projects</h2>

                        <div className='backgroundcolor mb-4 mt-4 d-flex'>
                            <div className='col-md-5'>
                                <img src={car} className='card-img-top img-fuild' />
                            </div>
                            <div className="card-body col-md-7 ">
                                <h5 className="card-title fontfamily font color text-start">Car Loan</h5>
                                <div className='text-start fontfamily '>Github Actions</div>
                                <p className='fontfamily fontt text-start '>
                                    <ul>
                                        <li>In this Car Loan project we provide the services to the clients about car and car loan</li>
                                        <li>Clients can chek the loan Prosess and loan persentage with the help of this Website and after cheking everything they can login </li>
                                        <li>Regional executive collect data of students and pass it to Operational executive</li>
                                        <li>Collect data will be stored in database(MYSQL)</li>
                                        <li>Only Operational executive has authority to approve the loan after cheking the cibil score</li>
                                        <li>Finally Chief executive pass the loan and collect the other information from the person who want the loan</li>
                                    </ul>
                                </p>
                            </div>
                        </div>

                        <div className='backgroundcolor  mb-4 ' style={{ display: 'flex' }}>
                            <div className='col-md-5'>
                                <img src={creamycuddle} className='portimg img-fuild  card-img-top' />
                            </div>
                            <div className="card-body col-md-7">
                                <h5 className="card-title fontfamily font color text-start">Creamycuddle</h5>
                                <div className='text-start fontfamily '>Github Actions</div>
                                <p className='fontfamily fontt text-start '>
                                    <ul>
                                        <li>Creamycuddle is the Baby Soap which is made by Cammel Milk</li>
                                        <li>The heart of cherished childhood memories, bath time was guided by "GrandMothers" age-old Recipes.</li>
                                        <li>This product healpfull for baby skin. we use all natural products in this soap.</li>
                                        <li>Collect data will be stored in database(MYSQL)</li>
                                        <li>Only Operational executive has authority to approve the loan after cheking the cibil score</li>
                                        <li>Finally Chief executive pass the loan and collect the other information from the person who want the loan</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='backgroundcolor  mb-4 d-flex'>
                        <div className='col-md-5'>
                            <img src={portfolio} className='img-fuild  card-img-top' />
                        </div>
                        <div className="card-body ms-5 col-md-7 ">
                            <h5 className="card-title fontfamily font color text-start ">Portfolio Website</h5>
                            <div className='text-start fontfamily '>My Portfolio</div>
                            <p className=" fontfamily fontt text-start ">
                                A simple portfolio website built using React js.
                                The dont, colours and overall design took me 3 design iterations and almost
                                month to finalize which was more than the actual time i took to fully develop and deploy it.
                            </p>
                        </div>
                    </div><br /><br />

                    <div className='mt-5 '>
                        <h5 className="card-title fontfamily font color text-start mb-5">Contact Me</h5>
                        <div className=' text-start'>
                            <h5 className='fontfamily '>Primary <br />
                                <span className='icone'><BiLogoGmail /> <a href=''></a></span>
                            </h5>
                        </div>
                    </div>
                    <div className='mt-3  '>
                        <h5 className='fontfamily text-start'>Social</h5>
                        <div className=' text-start d-flex'>
                            <h5 className='me-3'>
                                <span className='icone'><FaLinkedin /></span>
                            </h5>
                            <h5 className='ms-3'>
                                <span className='icone'><FaGithub /></span>
                            </h5>

                        </div>
                    </div>
                    <div className=' mt-3 '>
                        <h5 className='fontfamily text-start'>Phone</h5>
                        <div className='d-flex '>
                            <h5 className=' text-start me-3'>
                                <span className='icone'><MdWifiCalling3 /></span>
                            </h5>
                            <h5 className=''>91+ 9657579844</h5>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home