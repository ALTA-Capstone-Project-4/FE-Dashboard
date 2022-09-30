import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="container-fluid yellow-background text-white fw-semibold">
        <div className='row py-4'>
            <div className='col mt-3 text-center'>
                <p>Powered By Alterra</p>
                <p>©WAREHOUSE 2022. All Rights Reserved</p>
            </div>
            <div className='col'>
                <div className='px-5'>
                <p className="m-0">PT. Warehouse Insani TBK</p>
                <p className="m-0">Email: admin@warehouse.com</p>
                <p>Lokasi: Jalan Dr. Soetomo 28 Metro Utara, Metro, Lampung</p>
                </div>
            </div>
            <div className='col mt-2 text-center'>
                <div>
                <p>Social Media</p>
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" className='px-2'/>
                <FontAwesomeIcon icon={faTwitter} size="2x" className='px-2'/>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" className='px-2'/>
                <FontAwesomeIcon icon={faInstagram} size="2x" className='px-2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer