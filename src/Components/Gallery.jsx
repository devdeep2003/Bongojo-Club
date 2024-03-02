import LightGallery from 'lightgallery/react';
import '../index.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
             
               
                <a href="/1.jpg">
                    <img  src="/1.jpg" />
                </a>
                <a href="/2.jpg">
                    <img  src="/2.jpg" />
                </a>
                <a href="/3.jpg">
                    <img  src="/3.jpg" />
                </a>
                <a href="/4.jpg">
                    <img  src="/4.jpg" />
                </a>
                <a href="/5.jpg">
                    <img  src="/5.jpg" />
                </a>
                <a href="/6.jpg">
                    <img  src="/6.jpg" />
                </a>
                <a href="/7.jpg">
                    <img  src="/7.jpg" />
                </a>
                <a href="/8.jpg">
                    <img  src="/8.jpg" />
                </a>
                <a href="/9.jpg">
                    <img  src="/9.jpg" />
                </a>
                <a href="/10.jpg">
                    <img  src="/10.jpg" />
                </a>
                <a href="/11.jpg">
                    <img  src="/11.jpg" />
                </a>
                <a href="/12.jpg">
                    <img  src="/12.jpg" />
                </a>
                <a href="/13.jpg">
                    <img  src="/13.jpg" />
                </a>
                <a href="/14.jpg">
                    <img  src="/14.jpg" />
                </a>
                <a href="/15.jpg">
                    <img  src="/15.jpg" />
                </a>
                <a href="/16.jpg">
                    <img  src="/16.jpg" />
                </a>
                <a href="/17.jpg">
                    <img  src="/17.jpg" />
                </a>
                <a href="/18.jpg">
                    <img  src="/18.jpg" />
                </a>
                <a href="/r1.jpg">
                    <img  src="/r1.jpg" />
                </a>
                <a href="/r2.jpg">
                    <img  src="/r2.jpg" />
                </a>
                <a href="/r3.jpg">
                    <img  src="/r3.jpg" />
                </a>
                <a href="/r4.jpg">
                    <img  src="/r4.jpg" />
                </a>
                <a href="/r5.jpg">
                    <img  src="/r5.jpg" />
                </a>
                <a href="/r6.jpg">
                    <img  src="/r6.jpg" />
                </a>
                <a href="/r7.jpg">
                    <img  src="/r7.jpg" />
                </a>
                <a href="/r8.jpg">
                    <img  src="/r8.jpg" />
                </a>
                <a href="/r9.jpg">
                    <img  src="/r9.jpg" />
                </a>
                <a href="/r10.jpg">
                    <img  src="/r10.jpg" />
                </a>
                <a href="/r11.jpg">
                    <img  src="/r11.jpg" />
                </a>
                <a href="/r12.jpg">
                    <img  src="/r12.jpg" />
                </a>

             
            </LightGallery>
        </div>
    );
}
