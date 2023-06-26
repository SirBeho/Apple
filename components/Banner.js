// components/Banner.js

import Image from 'next/image';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="banner-image">
                            <Image src="/images/image1.jpg" alt="Imagen 1" width={400} height={300} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner-image">
                            <Image src="/images/image2.jpg" alt="Imagen 2" width={400} height={300} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="banner-image">
                            <Image src="/images/image3.jpg" alt="Imagen 3" width={400} height={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
