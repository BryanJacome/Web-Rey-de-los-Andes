import { useEffect } from 'react';
import { Button } from '@nextui-org/react';
import HeladoChocolate from '../images/HeladoChocolate.png';
import Helado2 from '../images/Helado2.png';
import Helado3 from '../images/Helado3.png';

export default function Carousel() {

    let SliderDom;
    let thumbnailBorderDom;
    let carouselDom;

    let timeRunning = 2000;
    let runTimeOut;
    clearTimeout(runTimeOut);

    useEffect(() => {
        thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        thumbnailBorderDom.querySelectorAll('.item');
        //thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);


        carouselDom = document.querySelector('.carousel');
        SliderDom = carouselDom.querySelector('.list'); // Asigna el valor a SliderDom aquí
    }, []);

    const nextDom = () => {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
        }, timeRunning);
    }

    const prevDom = () => {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('prev');
        }, timeRunning);
    }

    return (
        <div className='carousel rounded-lg'>
            <div className='list'>
                <div className="item">
                    <img src={HeladoChocolate} alt='helado de chocolate' />
                    <div className='content'>
                        <div className='title dark:text-[white]'>Chocolate</div>
                        <div className='desc dark:text-[white]'>Desc ch</div>
                        <div className='buttons'>
                            <Button color="primary" variant="light">Mas</Button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={Helado2} alt='helado de cono' />
                    <div className='content'>
                        <div className='title dark:text-[white]'>Ron Pasas</div>
                        <div className='desc dark:text-[white]'>Desc pepe</div>
                        <div className='buttons'>
                            <Button color="primary" variant="light">Mas</Button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src={Helado3} alt='helado de cono' />
                    <div className='content'>
                        <div className='title dark:text-[white]'>Chicle</div>
                        <div className='desc dark:text-[white]'>Desc pepe</div>
                        <div className='buttons'>
                            <Button color="primary" variant="light">Mas</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='thumbnail'>
                <div className="item">
                    <img src={Helado2} alt='helado de cono' />
                    <div className="content">
                        <div className="title">Ron Pasas</div>
                        <div className="description">Helado de Leche</div>
                    </div>
                </div>
                <div className="item">
                    <img src={Helado3} alt='helado de cono' />
                    <div className="content">
                        <div className="title">Chicle</div>
                        <div className="description">Helado de Leche</div>
                    </div>
                </div>
                <div className="item">
                    <img src={HeladoChocolate} alt='helado de chocolate' />
                    <div className="content">
                        <div className="title">Chocolate</div>
                        <div className="description">Helado de Leche</div>
                    </div>
                </div>
            </div>

            <div className="arrows">
                <button id="prev" onClick={prevDom}>S</button>
                <button id="next" onClick={nextDom}>A</button>
            </div>
            <div className="time"></div>
        </div>
    );
}
