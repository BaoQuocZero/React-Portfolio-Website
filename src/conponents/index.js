import React from 'react';

const index = (props) => {
    return (
        <>
            <header>
                <div class="container">
                    <nav class="navbar">

                        <div class="navbar__logo">
                            <img src="./img/logo.svg" alt="Cái logo" />
                        </div>

                        <ul class="navbar__links">
                            <li class="navbar__link"><a href="#works">Work</a></li>
                            <li class="navbar__link"><a href="#things">About</a></li>
                            <li class="navbar__link"><a href="#works">Resume</a></li>
                            <a href="#footer"><button class="navbar__btn">Contact</button></a>
                        </ul>

                        <div class="navbar__icons">
                            <div class="navbar__icon"></div>
                        </div>
                    </nav>
                </div>
            </header>

            <section id="banner">
                <div class="container">

                    <div class="banner__img">
                        <img src="./img/banner-img.png" alt="Cái banner" />
                    </div>

                    <div class="banner__heading">
                        <h1>Hello, I'am Bảo</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem error iusto repellendus voluptatum
                            animi fugiat dicta, at mollitia quam non?</p>
                        <a href="#"><button class="banner__btn">View More</button></a>
                        <div class="banner__socials">
                            <a href="#"><i class="fa-brands fa-dribbble"></i></a>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </section >

            <section id="things">
                <div class="container">

                    <div class="things__dec">
                        <img src="./img/things-dec-l.png" alt="lá cây trái" />
                    </div>

                    <div class="things__dec">
                        <img src="./img/things-dec-r.png" alt="lá cây phải" />
                    </div>

                    <h2>Thing I Do</h2>

                    <div class="things__item">
                        <img src="./img/things-item-1.png" alt="item 1" />

                        <div class="things__item--heading">
                            <h3>Lorem Ispum</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem similique et eos sint ipsa.
                                Perspiciatis eaque delectus adipisci repudiandae enim!</p>
                        </div>
                    </div>


                    <div class="things__item">

                        <img src="./img/things-item-2.png" alt="item 1" />

                        <div class="things__item--heading">
                            <h3>Lorem Ispum</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem similique et eos sint ipsa.
                                Perspiciatis eaque delectus adipisci repudiandae enim!</p>
                        </div>
                    </div>


                    <div class="things__item">

                        <img src="./img/things-item-3.png" alt="item 1" />

                        <div class="things__item--heading">
                            <h3>Lorem Ispum</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem similique et eos sint ipsa.
                                Perspiciatis eaque delectus adipisci repudiandae enim!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="works">
                <div class="container">

                    <div class="works__dec">
                        <img src="./img/work-dec.png" alt="Vẫn là cái lá" />
                    </div>

                    <div class="works__dec">
                        <img src="./img/work-dec.png" alt="Vẫn là cái lá" />
                    </div>

                    <h2>Recent Works</h2>


                    <div class="works__img">
                        <div class="works__img--single">
                            <img src="./img/work-1.png" alt="dự án 1" />
                        </div>

                        <div class="works__img--single">
                            <img src="./img/work-2.png" alt="dự án 2" />
                        </div>

                        <div class="works__img--single">
                            <img src="./img/work-3.png" alt="dự án 3" />
                        </div>

                        <div class="works__img--single">
                            <img src="./img/work-4.png" alt="dự án 4" />
                        </div>
                    </div>


                    <div class="works__btn">
                        <a href="#"><button>View Works</button></a>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div class="container">

                    <div class="footer__dec">
                        <img src="./img/things-dec-l.png" alt="" />
                    </div>


                    <div class="footer__img">
                        <img src="./img//footer-img.png" alt="" />
                    </div>


                    <div class="footer__heading">
                        <h1>Ready to make something amazing?</h1>

                        <div class="footer__contact">
                            <a href="tel:0372701722">
                                <i class="fa-solid fa-phone"></i>
                                <p>0372701722</p>
                            </a>
                            <a href="mailto:baoquoczero@gmail.com">
                                <i class="fa-regular fa-envelope"></i>
                                <p>Baoquoczero@gmail.com</p>
                            </a>
                        </div>

                        <div class="banner__socials">
                            <a href="#"><i class="fa-brands fa-dribbble"></i></a>
                            <a href="#"><i class="fa-brands fa-behance"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default index;