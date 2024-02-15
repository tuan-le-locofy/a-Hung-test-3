import { FunctionComponent, useState, useCallback } from "react";
import {
  Radio,
  FormControlLabel,
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MatterhornPopup from "../components/MatterhornPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);
  const navigate = useNavigate();

  const onSearchTextClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSearchFlightsButtonClick = useCallback(() => {
    navigate("/results-page");
  }, [navigate]);

  const onHotelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onViewAllStaysButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.homepage}>
          <div className={styles.heroSection}>
            <header className={styles.topHeader}>
              <div className={styles.topContainer}>
                <button className={styles.fickleflightLogo}>
                  <img
                    className={styles.symbolsIcon}
                    alt=""
                    src="/undefined.svg"
                  />
                </button>
                <div className={styles.navigationRight}>
                  <div className={styles.navigationMenu}>
                    <button className={styles.explore}>Explore</button>
                    <div className={styles.search} onClick={onSearchTextClick}>
                      Search
                    </div>
                    <div className={styles.search} onClick={onHotelsTextClick}>
                      Hotels
                    </div>
                    <button className={styles.offers}>Offers</button>
                  </div>
                  <div className={styles.accountSection}>
                    <img
                      className={styles.hamburgerMenuIcon}
                      alt=""
                      src="/notification2.svg"
                    />
                    <img
                      className={styles.notificationBellIcon}
                      alt=""
                      src="/notification3.svg"
                    />
                    <img
                      className={styles.profilePictureIcon}
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className={styles.searchSection}>
              <div className={styles.bannerGradient} />
              <img
                className={styles.bannerBackground}
                alt=""
                src="/undefined1.png"
              />
              <div className={styles.searchContainer}>
                <div className={styles.title}>
                  <div
                    className={styles.letsExplore}
                  >{`Let’s explore & travel the world`}</div>
                  <div className={styles.findTheBest}>
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className={styles.searchForm}>
                  <div className={styles.formTitleGroup}>
                    <b className={styles.searchFlights}>Search flights</b>
                    <div className={styles.flightOptions}>
                      <div className={styles.flightType}>
                        <FormControlLabel
                          className={styles.radio}
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className={styles.radio1}
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.formInputsRow}>
                    <div className={styles.inputsRow}>
                      <Autocomplete
                        className={styles.departureField}
                        size="medium"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)",
                          "Sanya (SYX)",
                        ]}
                        renderInput={(params: any) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                      />
                      <div className={styles.arrivalField}>
                        <div className={styles.input}>
                          <div className={styles.labelContainer}>
                            <div className={styles.arrival}>Arrival</div>
                          </div>
                          <div className={styles.active}>
                            <div className={styles.muiautocompletetag}>
                              <div className={styles.chip}>
                                <div className={styles.container}>
                                  <div className={styles.avatar}>
                                    <div className={styles.op}>F</div>
                                  </div>
                                  <div className={styles.typography}>
                                    <div className={styles.chip1}>Chip</div>
                                  </div>
                                  <img
                                    className={styles.notificationBellIcon}
                                    alt=""
                                    src="/undefined2.svg"
                                  />
                                </div>
                              </div>
                              <div className={styles.chip}>
                                <div className={styles.container}>
                                  <div className={styles.avatar}>
                                    <div className={styles.op}>F</div>
                                  </div>
                                  <div className={styles.typography}>
                                    <div className={styles.chip1}>Chip</div>
                                  </div>
                                  <img
                                    className={styles.notificationBellIcon}
                                    alt=""
                                    src="/undefined2.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={styles.losAngelesLa}>
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.departureField}>
                        <DatePicker
                          label="Date"
                          value={selectOutlinedDateTimePickerValue}
                          onChange={(newValue: any) => {
                            setSelectOutlinedDateTimePickerValue(newValue);
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              variant: "outlined",
                              size: "medium",
                              fullWidth: true,
                              required: false,
                              autoFocus: false,
                              error: false,
                              color: "primary",
                              placeholder: "Date",
                            },
                            openPickerIcon: {
                              component: () => <></>,
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.buttonGroup}>
                      <div
                        className={styles.searchFlightsButton}
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className={styles.button}>Search flights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.homeContents}>
            <div className={styles.upcomingFlightSection}>
              <div className={styles.upcomingFlightSection1}>
                <b className={styles.recentSearches}>Recent Searches</b>
                <div className={styles.flightDetails}>
                  <div className={styles.recentSearches1}>
                    <div className={styles.flightMainContainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.fromDetails}>
                          <b className={styles.sin}>SIN</b>
                        </div>
                        <img
                          className={styles.durationIcon}
                          alt=""
                          src="/undefined3.svg"
                        />
                        <div className={styles.toDetails}>
                          <b className={styles.lax}>LAX</b>
                        </div>
                      </div>
                      <div className={styles.departOn7Container}>
                        <b>{`Depart on: `}</b>
                        <span>7 Sep 2021</span>
                      </div>
                    </div>
                    <div className={styles.flightMainContainer}>
                      <div className={styles.toAndFrom}>
                        <div className={styles.fromDetails}>
                          <b className={styles.sin}>MY</b>
                        </div>
                        <img
                          className={styles.durationIcon}
                          alt=""
                          src="/undefined4.svg"
                        />
                        <div className={styles.toDetails}>
                          <b className={styles.lax}>DUB</b>
                        </div>
                      </div>
                      <div className={styles.departOn7Container}>
                        <b>Depart on:</b>
                        <span> 9 Sep 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.prepareMenu}>
                    <div className={styles.prepareForYour}>
                      Prepare for your trip
                    </div>
                    <div className={styles.tripMenus}>
                      <button className={styles.hotel} onClick={onHotelClick}>
                        <img
                          className={styles.hotelIcon}
                          alt=""
                          src="/undefined5.svg"
                        />
                        <div className={styles.hotel1}>Hotel</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.hotelIcon}>
                          <div className={styles.background} />
                          <img
                            className={styles.ticketIcon}
                            alt=""
                            src="/undefined6.svg"
                          />
                        </div>
                        <div className={styles.attractions1}>Attractions</div>
                      </button>
                      <button className={styles.hotel}>
                        <img
                          className={styles.hotelIcon}
                          alt=""
                          src="/undefined7.svg"
                        />
                        <div className={styles.attractions1}>Eats</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.hotelIcon}>
                          <div className={styles.background1} />
                          <img
                            className={styles.trainIcon}
                            alt=""
                            src="/undefined8.svg"
                          />
                        </div>
                        <div className={styles.attractions1}>Commute</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.taxiIcon}>
                          <div className={styles.background2} />
                          <img
                            className={styles.taxiIcon1}
                            alt=""
                            src="/undefined9.svg"
                          />
                        </div>
                        <div className={styles.taxi1}>Taxi</div>
                      </button>
                      <button className={styles.hotel}>
                        <div className={styles.hotelIcon}>
                          <div className={styles.background3} />
                          <img
                            className={styles.movieIcon}
                            alt=""
                            src="/undefined10.svg"
                          />
                        </div>
                        <div className={styles.attractions1}>Movies</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.popDestinationsMain}>
              <div className={styles.destinationsTitles}>
                <div className={styles.titleContainer}>
                  <b className={styles.recentSearches}>Plan your next trip</b>
                  <b className={styles.mostPopularDestinations}>
                    Most Popular Destinations
                  </b>
                </div>
                <button className={styles.viewAllTop}>
                  <div className={styles.viewAllDestinations}>
                    View all destinations
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/undefined11.svg"
                  />
                </button>
              </div>
              <div className={styles.cardsContainer}>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined12.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Paris</b>
                      <div className={styles.details}>
                        <div className={styles.div}>$699</div>
                        <div className={styles.from}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined13.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Greece</b>
                      <div className={styles.details1}>
                        <div className={styles.div1}>$1079</div>
                        <div className={styles.from1}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined14.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Norway</b>
                      <div className={styles.details}>
                        <div className={styles.div}>$895</div>
                        <div className={styles.from}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className={styles.col1}>
                  <div className={styles.pariscard}>
                    <img
                      className={styles.parisimageIcon}
                      alt=""
                      src="/undefined15.png"
                    />
                    <div className={styles.destinationDetails}>
                      <b className={styles.paris}>Tuscany</b>
                      <div className={styles.details3}>
                        <div className={styles.div3}>$1245</div>
                        <div className={styles.from3}>from</div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom}>
                <div className={styles.viewAllDestinations1}>
                  View all destinations
                </div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/undefined16.svg"
                />
              </div>
            </div>
            <div className={styles.recommendedHolidaysContainer}>
              <div className={styles.recTitle}>
                <b className={styles.recommendedHolidays}>
                  Recommended Holidays
                </b>
                <button className={styles.viewAllHolidaysParent}>
                  <div className={styles.viewAllHolidays}>
                    View all holidays
                  </div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/undefined17.svg"
                  />
                </button>
              </div>
              <div className={styles.recCardsContainer}>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined18.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Bali</div>
                        <div className={styles.d3n}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$899</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard1}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined19.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Swiss</div>
                        <div className={styles.d3n}>6D5N</div>
                      </div>
                      <div className={styles.div4}>$900</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard3}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined20.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Boracay</div>
                        <div className={styles.d3n}>5D4N</div>
                      </div>
                      <div className={styles.div4}>$699</div>
                    </div>
                  </div>
                </button>
                <button className={styles.recCard4}>
                  <img
                    className={styles.unsplash5mv818tzxeoIcon}
                    alt=""
                    src="/undefined21.png"
                  />
                  <div className={styles.holidayDetails}>
                    <div className={styles.recTitle}>
                      <div className={styles.baliParent}>
                        <div className={styles.bali}>Palawan</div>
                        <div className={styles.d3n}>4D3N</div>
                      </div>
                      <div className={styles.div4}>$789</div>
                    </div>
                  </div>
                </button>
              </div>
              <div className={styles.viewAllBottom1}>
                <div className={styles.viewAllHolidays1}>View all holidays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/undefined22.svg"
                />
              </div>
            </div>
            <div className={styles.popularStays}>
              <div className={styles.popularStaysHeader}>
                <div className={styles.popularStaysTitle}>
                  <b className={styles.popularStays1}>Popular Stays</b>
                </div>
                <button
                  className={styles.viewAllStaysButton}
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className={styles.viewAllStays}>View all stays</div>
                  <img
                    className={styles.notificationBellIcon}
                    alt=""
                    src="/undefined23.svg"
                  />
                </button>
              </div>
              <div className={styles.hotelCards}>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined24.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Entire bungalow
                        </div>
                        <b className={styles.matterhornSuites}>
                          Matterhorn Suites
                        </b>
                        <div className={styles.night}>$575/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/undefined25.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(60 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>4.9</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/undefined26.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined27.png"
                    />
                    <div className={styles.stayDetails1}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          2-Story beachfront suite
                        </div>
                        <b className={styles.matterhornSuites}>
                          Discovery Shores
                        </b>
                        <div className={styles.night}>$360/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/undefined25.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(116 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>4.8</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/undefined28.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard1}>
                  <div className={styles.hotelCard4}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined29.png"
                    />
                    <div className={styles.stayDetails2}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Single deluxe hut
                        </div>
                        <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                        <div className={styles.night}>$420/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/undefined25.svg"
                        onClick={openMatterhornPopup2}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews2}>(78 reviews)</div>
                      <div className={styles.groupDiv}>
                        <div className={styles.div10}>4.7</div>
                        <img
                          className={styles.vectorIcon2}
                          alt=""
                          src="/undefined30.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
                <div className={styles.hotelCard41}>
                  <div className={styles.hotelCard5}>
                    <img
                      className={styles.matterhornSuitesImage}
                      alt=""
                      src="/undefined31.png"
                    />
                    <div className={styles.stayDetails}>
                      <div className={styles.stayDetailsRows}>
                        <div className={styles.entireBungalow}>
                          Deluxe King Room
                        </div>
                        <b className={styles.arcticHut}>Lake Louise Inn</b>
                        <div className={styles.night}>$244/night</div>
                      </div>
                      <img
                        className={styles.videoIcon}
                        alt=""
                        src="/undefined25.svg"
                        onClick={openMatterhornPopup3}
                      />
                    </div>
                    <div className={styles.rating}>
                      <div className={styles.reviews}>(63 reviews)</div>
                      <div className={styles.parent}>
                        <div className={styles.div8}>4.6</div>
                        <img
                          className={styles.vectorIcon}
                          alt=""
                          src="/undefined32.svg"
                        />
                      </div>
                    </div>
                    <button className={styles.moreDetailsButton}>
                      <div className={styles.button1}>More details</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.mobileViewAllStays}>
                <div className={styles.viewAllStays1}>View all stays</div>
                <img
                  className={styles.notificationBellIcon}
                  alt=""
                  src="/undefined33.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.footerSection}>
            <div className={styles.subscribeSection}>
              <img
                className={styles.subscribeSectionBackground}
                alt=""
                src="/undefined34.png"
              />
              <div className={styles.shareYourTravelsForm}>
                <div className={styles.formHeader}>
                  <b className={styles.recentSearches}>
                    subscribe to our newsletter
                  </b>
                  <b className={styles.formTitle}>Get weekly updates</b>
                </div>
                <div className={styles.form}>
                  <div className={styles.formText}>
                    <div className={styles.fillInYour}>
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className={styles.formFields}>
                    <div className={styles.formText}>
                      <TextField
                        className={styles.input1}
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                      />
                    </div>
                    <div className={styles.formText}>
                      <TextField
                        className={styles.input1}
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                        sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                      />
                    </div>
                  </div>
                  <button className={styles.button5}>
                    <div className={styles.unstyledbutton}>
                      <div className={styles.button6}>submit</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className={styles.footer}>
              <div className={styles.fickleflightBio}>
                <img
                  className={styles.logoIcon}
                  alt=""
                  src="/undefined35.svg"
                />
                <div className={styles.fickleFlightIs}>
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className={styles.socialIcons}
                  alt=""
                  src="/undefined36.svg"
                />
              </div>
              <div className={styles.footerChild} />
              <div className={styles.footerLinks}>
                <div className={styles.company}>
                  <div className={styles.aboutUs}>About Us</div>
                  <div className={styles.company1}>Company</div>
                  <div className={styles.news}>News</div>
                  <div className={styles.careers}>Careers</div>
                  <div className={styles.howWeWork}>How we work</div>
                </div>
                <div className={styles.company}>
                  <div className={styles.account}>Account</div>
                  <div className={styles.support1}>Support</div>
                  <div className={styles.supportCenter}>Support Center</div>
                  <div className={styles.faq}>FAQ</div>
                  <div className={styles.accessibility}>Accessibility</div>
                </div>
                <div className={styles.more}>
                  <div className={styles.covidAdvisory}>Covid Advisory</div>
                  <div className={styles.more1}>More</div>
                  <div className={styles.airlineFees}>Airline Fees</div>
                  <div className={styles.tips}>Tips</div>
                  <div className={styles.howWeWork}>Quarantine Rules</div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
        {isMatterhornPopup2Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup2}
          >
            <MatterhornPopup onClose={closeMatterhornPopup2} />
          </PortalPopup>
        )}
        {isMatterhornPopup3Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup3}
          >
            <MatterhornPopup onClose={closeMatterhornPopup3} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
