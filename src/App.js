import { useEffect, useState } from "react";
import About from "./About";
import Admissions from "./Admissions";
import "./App.css";
import Banner from "./Banner/Banner";
import Children from "./Children";
import Donate from "./Donate/Donate";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Shareholders from "./Shareholders";
import axios from "axios";
import VideoLinks from "./VideoLinks";
import Construction from "./Construction";

const TEAM_ORDER = (position) => {
  switch (position){
    case "Chairman/Trustee":
      return 0
    case "Trustee/Project Manager":
      return 1
    case "Trustee":
      return 2
    case "Advisor":
      return 999
    default:
      return 500
  }
}

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
  const [videoHeader, setVideoHeader] = useState({});
  const [constructionData, setConstructionData] = useState({});

  const fetchData = async () => {
    const [
      bannerRes,
      aboutHeader,
      aboutData,
      teamHeader,
      teamData,
      galleryData,
      videosHeader,
      admissionsHeader,
      admissionsData,
      childrenData,
      donateData,
      donors,
      bankData,
      feedbackData,
      constructionHeader,
      constructionItems
    ] = await Promise.all([
      axios.get(baseUrl + "/api/banner"),
      axios.get(baseUrl + "/api/about-header"),
      axios.get(baseUrl + "/api/abouts"),
      axios.get(baseUrl + "/api/team-header"),
      axios.get(baseUrl + "/api/members?populate=*"),
      axios.get(baseUrl + "/api/galleries?populate=*"),
      axios.get(baseUrl + "/api/videos-header"),
      axios.get(baseUrl + "/api/admissions-header"),
      axios.get(baseUrl + "/api/admissions"),
      axios.get(baseUrl + "/api/children"),
      axios.get(baseUrl + "/api/donate"),
      axios.get(baseUrl + "/api/donors"),
      axios.get(baseUrl + "/api/bank-accounts"),
      axios.get(baseUrl + "/api/feedback-header"),
      axios.get(baseUrl + "/api/construction-heading"),
      axios.get(baseUrl + "/api/construction-items?populate=*")
    ]);

    //Set Banner content
    setBanner({
      title: bannerRes.data.data.attributes.Title,
      subtitle: bannerRes.data.data.attributes.Subtitle,
      button: bannerRes.data.data.attributes.button_text,
    });

    //Set About content
    let t = {
      title: aboutHeader.data.data.attributes.title,
      header: aboutHeader.data.data.attributes.header,
      description: aboutHeader.data.data.attributes.description,
      content: aboutData.data.data.map((item) => ({
        header: item.attributes.header,
        description: item.attributes.description,
      })),
    };
    setAbout(t);

    //Set Team content

    let team = teamData.data.data.map((sh) => ({
      image: sh.attributes.head_image.data?.attributes.url,
      name: sh.attributes.full_name,
      position: sh.attributes.position,
    }))

    team.sort((a, b) => {
      return TEAM_ORDER(a.position) - TEAM_ORDER(b.position)
    })

    t = {
      title: teamHeader.data.data.attributes.title,
      header: teamHeader.data.data.attributes.header,
      description: teamHeader.data.data.attributes.description,
      content: team,
    };
    setShareholders(t);

    //Set Gallery images
    setGalleryImages(
      galleryData.data.data.map((img) => ({
        url: img.attributes.image.data.attributes.url,
        alt: img.attributes.description,
      }))
    );

    //Set Videos header
    setVideoHeader({
      title: videosHeader.data.data.attributes.title,
      header: videosHeader.data.data.attributes.header,
      description: videosHeader.data.data.attributes.description,
      results: videosHeader.data.data.attributes.number_of_results,
      moreVideos: videosHeader.data.data.attributes.more_videos_text,
    });

    //Set Admissions content
    t = {
      title: admissionsHeader.data.data.attributes.title,
      header: admissionsHeader.data.data.attributes.header,
      description: admissionsHeader.data.data.attributes.description,
      content: admissionsData.data.data.map((ad) => ({
        header: ad.attributes.header,
        description: ad.attributes.description,
      })),
    };
    setAdmissions(t);

    //Set Children content
    setChildren({
      title: childrenData.data.data.attributes.title,
      header: childrenData.data.data.attributes.header,
      paragraph1: childrenData.data.data.attributes.paragraph1,
      paragraph2: childrenData.data.data.attributes.paragraph2,
      paragraph3: childrenData.data.data.attributes.paragraph3,
    });

    //Set Donate content
    t = {
      title: donateData.data.data.attributes.title,
      header: donateData.data.data.attributes.header,
      description: donateData.data.data.attributes.description,
      quote: donateData.data.data.attributes.quote,
      head_office: donateData.data.data.attributes.head_office,
      phone: donateData.data.data.attributes.phone,
      mobile: donateData.data.data.attributes.mobile,
      email: donateData.data.data.attributes.email,
      pakistan: donateData.data.data.attributes.pakistan,
      Canada: donateData.data.data.attributes.Canada,
      UK: donateData.data.data.attributes.UK,
      NTN: donateData.data.data.attributes.NTN,
      bank_accounts: bankData.data.data.map((bank) => ({
        name: bank.attributes.name,
        description: bank.attributes.description,
        address: bank.attributes.address,
        account_title: bank.attributes.account_title,
        account_number: bank.attributes.account_number,
        currency: bank.attributes.currency,
        swift_code: bank.attributes.swift_code,
        IBAN: bank.attributes.IBAN,
      })),
      donors: donors.data.data.map((donor) => ({
        title: donor.attributes.title,
        link: donor.attributes.link,
        link_text: donor.attributes.link_text,
      })),
    };
    setDonate(t);

    //Set Feedback content
    setFeedback({
      title: feedbackData.data.data.attributes.title,
      header: feedbackData.data.data.attributes.header,
      phone: feedbackData.data.data.attributes.phone,
      email: feedbackData.data.data.attributes.email,
    });
    console.log(constructionItems)

    //Set Construction content
    setConstructionData({
      title: constructionHeader.data.data.attributes.title,
      header: constructionHeader.data.data.attributes.header,
      description: constructionHeader.data.data.attributes.description,
      content: constructionItems.data.data.map((item) => ({
        url: item.attributes.image.data.attributes.url,
        caption: item.attributes.caption,
      }))
    })
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const sections = [
    <About about={about} />,
    <Children children={children} />,
    <Gallery images={galleryImages}/>,
    <VideoLinks videoHeader={videoHeader} />,
    <Admissions admissions={admissions} />,
    <Shareholders shareholders={shareholders} baseUrl={baseUrl} />,
    <Construction content={constructionData}/>,
    <Donate donate={donate} />,
    <Feedback feedback={feedback} />
  ]

  return (
    <div id="wrapper" className="App">
      <Banner banner={banner} />
      <main id="content">
        {sections.map((section, idx) => {
          if (idx%2===1){
            return <div key={idx} className='secondary-color'>
              {section}
            </div>
          }
          return section;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
