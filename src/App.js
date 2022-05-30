import { useEffect, useState } from 'react';
import About from './About';
import Admissions from './Admissions';
import './App.css';
import Banner from './Banner/Banner';
import Children from './Children';
import Donate from './Donate/Donate';
import Feedback from './Feedback';
import Footer from './Footer';
import Gallery from './Gallery';
import Shareholders from './Shareholders/Shareholders';
import axios from 'axios';

function App() {

  const baseUrl = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337";
  const [galleryImages, setGalleryImages] = useState([]);
  const [shareholders, setShareholders] = useState({});
  const [banner, setBanner] = useState({});
  const [about, setAbout] = useState({});
  const [admissions, setAdmissions] = useState({});
  const [children, setChildren] = useState({});
  const [donate, setDonate] = useState({});
  const [feedback, setFeedback] = useState({});

  const fetchData = async () => {

    //Get Banner content
    let res = await axios.get(baseUrl + '/api/banner');
    setBanner({
      title: res.data.data.attributes.Title,
      subtitle: res.data.data.attributes.Subtitle,
      button: res.data.data.attributes.button_text
    });

    //Get About content
    res = await axios.get(baseUrl + '/api/about-header');
    let t = {
      title: res.data.data.attributes.title,
      header: res.data.data.attributes.header,
      description: res.data.data.attributes.description,
      content: []
    }
    res = await axios.get(baseUrl + '/api/abouts');
    t.content = res.data.data.map(item => (
      {
        header: item.attributes.header,
        description: item.attributes.description
      }
    ))
    setAbout(t);

    //Get Team content
    res = await axios.get(baseUrl + '/api/team-header');
    t = {
      title: res.data.data.attributes.title,
      header: res.data.data.attributes.header,
      description: res.data.data.attributes.description,
      content: []
    }
    res = await axios.get(baseUrl + '/api/members?populate=*');
    t.content = res.data.data.map((sh) => (
      {
        image:sh.attributes.head_image.data.attributes.url,
        name:sh.attributes.full_name,
        position:sh.attributes.position
      }
    ))
    setShareholders(t);

    //Get Gallery images
    res = await axios.get(baseUrl + '/api/galleries?populate=*');
    setGalleryImages(res.data.data.map((img) => (
      {
        url:img.attributes.image.data.attributes.url,
        alt:img.attributes.description
      }
    )));

    //Get Admissions content
    res = await axios.get(baseUrl + '/api/admissions-header');
    t = {
      title: res.data.data.attributes.title,
      header: res.data.data.attributes.header,
      description: res.data.data.attributes.description,
      content: []
    }
    res = await axios.get(baseUrl + '/api/admissions');
    t.content = res.data.data.map((ad) => (
      {
        header:ad.attributes.header,
        description:ad.attributes.description
      }
    ))
    setAdmissions(t);

    //Get Children content
    res = await axios.get(baseUrl + '/api/children');
    setChildren({
      title: res.data.data.attributes.title,
      header: res.data.data.attributes.header,
      paragraph1: res.data.data.attributes.paragraph1,
      paragraph2: res.data.data.attributes.paragraph2,
      paragraph3: res.data.data.attributes.paragraph3,
    })

    //Get Donate content
    res = await axios.get(baseUrl + '/api/donate');
    t = {
      title: res.data.data.attributes.title,
      header: res.data.data.attributes.header,
      description: res.data.data.attributes.description,
      quote: res.data.data.attributes.quote,
      head_office: res.data.data.attributes.head_office,
      phone: res.data.data.attributes.phone,
      mobile: res.data.data.attributes.mobile,
      email: res.data.data.attributes.email,
      pakistan: res.data.data.attributes.pakistan,
      Canada: res.data.data.attributes.Canada,
      UK: res.data.data.attributes.UK,
      NTN: res.data.data.attributes.NTN,
      bank_accounts: []
    }
    res = await axios.get(baseUrl + '/api/bank-accounts');
    t.bank_accounts = res.data.data.map((bank) => (
      {
        name: bank.attributes.name,
        description: bank.attributes.description,
        address: bank.attributes.address,
        account_title: bank.attributes.account_title,
        account_number: bank.attributes.account_number,
        currency: bank.attributes.currency,
        swift_code: bank.attributes.swift_code,
        IBAN: bank.attributes.IBAN,
      }
    ))
    setDonate(t);

    //Get Feedback content
    res = await axios.get(baseUrl + '/api/feedback-header');
    setFeedback({
      title: res.data.data.attributes.title,
      header: res.data.data.attributes.header,
      phone: res.data.data.attributes.phone,
      email: res.data.data.attributes.email
    })
    
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
      <div id="wrapper" className='App'>
        <Banner banner={banner} />        
        <main id="content">
            <About about={about} />
            <Shareholders shareholders={shareholders} baseUrl={baseUrl} />
            <Gallery images={galleryImages} baseUrl={baseUrl} />
            <Admissions admissions={admissions} />
            <Children children={children} />
            <Donate donate={donate} />
            <Feedback feedback={feedback} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
