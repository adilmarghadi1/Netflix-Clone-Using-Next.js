import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FiPlus } from "react-icons/fi";
import Button from '@mui/material/Button';
import back from '../images/img2.jpg'
import logo from '../images/logo.png'
import Icon from '@mui/material/Icon';
import img1 from "../images/img.jpg"
import img4 from '../images/img4.png'
import img5 from "../images/img5.png"
import img6 from "../images/img5.jpg"
import { useSession, signIn, signOut } from "next-auth/react"


import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export default function Home() {
   

  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }

  return (
    <div>
      <Head>
        <title>Hello Adil</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <div className={styles.hero}>
        <nav className={styles.navbar}>
          <div>
        <Image width = "170px" height="56px"   src={logo} alt="logo" />
        </div>
        <div className={styles.flex1}>
         <select className={styles.select}>
           <option hidden selected disabled value="0" className={styles.option}>English</option>
           <option className={styles.option}>العربية</option>
           <option className={styles.option}>Francais</option>

           <option className={styles.option}>English</option>
         </select>
          
         <Button variant="contained" onClick={() => signIn()} className={styles.btn1}>Sign In</Button>
         </div>
          
       </nav>
       <div className={styles.center}>
        <h1>Unlimited movies, TV<br /> shows, and more.</h1>
        <p className={styles.txt}>Watch anywhere. Cancel anytime.</p>
        <p className={styles.text1}>Ready to watch? Enter your email to create or restart your membership.</p>

       </div>
       <div className={styles.btn2}>
        <input type="email" placeholder="Email Address" required className={styles.  input1}/>
        <button>get started <ChevronRightIcon className={styles.icon}/></button>
       </div>
       </div>
     
       <div className={styles.container}>
        <div className={styles.box1}>
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <div className={styles.box2}>
            <Image src={img1} width={560} height={330} className={styles.img3} alt=""/>
        </div>
     </div>


     <div className={styles.container}>
     <div className={styles.box2}>
            <Image src={img4} width={560} height={330} className={styles.img3} alt=""/>
        </div>
         
        <div className={styles.box1}>
            <h1>Download your shows to watch offline.</h1>
          <p>Save your favorites easily and always have something to watch.</p>
        </div>
     </div>

     <div className={styles.container}>
     <div className={styles.box1}>
            <h1>Watch everywhere.</h1>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
        </p>
        </div>
        
     <div className={styles.box2}>
            <Image src={img6} width={560} height={330} className={styles.img3} alt=""/>
        </div>
         
         
     </div>
     

     <div className={styles.container}>
     <div className={styles.box2}>
            <Image src={img5} width={560} height={330} className={styles.img3} alt=""/>
        </div>
         
        <div className={styles.box1}>
            <h1>Create profiles for kids.</h1>
            <p>
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
        </div>
     </div>


     <div className={styles.container2}>
       <h1>Ready to watch? Enter your email to create or restart your membership.</h1>
      
       
      <div className={styles.btn2}>
        <input type="email" placeholder="Email Address" required className={styles.  input1}/>
        <button>get started <ChevronRightIcon className={styles.icon}/></button>
       </div>
       <br/>
       <br/>
        <br/>
        </div>

    </div>
  )
}
