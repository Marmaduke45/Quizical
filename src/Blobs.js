
function Blob1 () {
    return <svg className="svg-blob" id="blobOne" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs> 
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stopColor="rgba(19.518, 211.913, 215.227, 1)" offset="0%"></stop>
                        <stop id="stop2" stopColor="rgba(190.291, 54.797, 255, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M28.7,-27.4C36.1,-21.3,40.2,-10.6,37.2,-3C34.2,4.6,24,9.2,16.6,16.5C9.2,23.8,4.6,33.8,-2.6,36.4C-9.8,39,-19.6,34.2,-25.7,26.9C-31.8,19.6,-34.1,9.8,-34.4,-0.2C-34.6,-10.3,-32.7,-20.6,-26.6,-26.7C-20.6,-32.9,-10.3,-35,0.2,-35.1C10.6,-35.3,21.3,-33.6,28.7,-27.4Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0"></path>
            </svg>
}

function Blob2 () {
    return  <svg className="svg-blob" id="blobTwo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs> 
                    <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                        <stop id="stop1" stopColor="rgba(0, 14.266, 208.397, 1)" offset="0%"></stop>
                        <stop id="stop2" stopColor="rgba(255, 11.607, 160.529, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#sw-gradient)" d="M25.3,-28.1C32.6,-24.1,38.1,-15.9,37.2,-8.4C36.2,-1,28.8,5.7,23.4,12.1C18,18.4,14.5,24.4,8.6,28.8C2.7,33.2,-5.7,35.9,-10.6,32.6C-15.5,29.3,-17,20,-19.5,12.7C-22,5.4,-25.4,0.2,-25.6,-5.5C-25.8,-11.2,-22.8,-17.4,-18,-21.8C-13.2,-26.2,-6.6,-28.8,1.2,-30.3C9,-31.7,18.1,-32,25.3,-28.1Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" stroke="url(#sw-gradient)"></path>
            </svg>
}


export {Blob1, Blob2}