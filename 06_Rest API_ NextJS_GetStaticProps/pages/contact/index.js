
import NavBar from '../../components/NavBar';
import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
    return (
      <>
      <NavBar />
      <Head>
        <title>Contact Page</title>
      </Head>
        <h1 style={{color: "green"}}>
          This is Contact Page 
        </h1>
        <div className="image-container">
          <div className="internal-image" style={{display: "flex" }}>
            <div>Internal Image is : </div>
            <Image src="/table_laptop_juice.jpeg" width="300" height="300" alt="laptop-juice-image" />
          </div>

          <div className="external-image" style={{display: "flex" }}>
            <div>External Image is : </div>
            <Image src="https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="300" height="300" alt="laptop-coffee-image" />
          </div>
        </div>

        </>
    )
}

export default Contact;
